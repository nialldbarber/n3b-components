import { useRef } from 'react'
import type { ReactNode } from 'react'
import { Animated, Easing } from 'react-native'
import type { PressableProps } from 'react-native'

import {
  ButtonText,
  Container,
  Pressable,
  TextContainer,
  Underline,
} from '@n3b/components/Button/styles'
import { LoadingSpinner } from '@n3b/components/LoadingSpinner'
import type { Alignment, ButtonWidth, Variant } from '@n3b/types'

export interface PressableProp extends PressableProps {
  /**
   * @description
   * The colour variant of the button
   * @default primary
   * @example
   * ```tsx
   * <Button variant="primary" />
   * <Button variant="secondary" />
   * <Button variant="tertiary" />
   * ```
   */
  variant?: Variant
  /**
   * @description
   * Define the loading state of the button
   * @default false
   * @example
   * ```tsx
   * <Button isLoading />
   * <Button isLoading={false} />
   * <Button isLoading={loading} />
   * ```
   */
  isLoading?: boolean
  /**
   * @description
   * The vertical alignment of the
   * button
   * @default left
   * @example
   * ```tsx
   * <Button align="center" />
   * <Button align="right" />
   * ```
   */
  align?: Alignment
  /**
   * @description
   * The size the button spans.
   * By default, the button will fill
   * available space it has. Contain
   * will span the size of it's inner
   * contents
   * @default full
   * @example
   * ```tsx
   * <Button size="full" />
   * <Button size="contain" />
   * ```
   */
  size?: ButtonWidth
  /**
   * @description
   * The children value of the button
   * @example
   * ```tsx
   * <Button>
   *   <Text>Lorem Ipsum...</Text>
   * </Button>
   * ```
   */
  children: ReactNode
  /**
   * @description
   * The buttons accessibility label
   * @default Button
   */
  accessibilityLabel?: string
  /**
   * @description
   * The buttons accessibility hint
   * Give the user a hint of what the
   * button does!
   */
  accessibilityHint: string
}

export default function Button({
  children,
  variant = 'primary',
  align = 'left',
  size = 'full',
  isLoading = false,
  accessibilityLabel = 'Button',
  accessibilityHint,
  ...rest
}: PressableProp) {
  const buttonScale = useRef(new Animated.Value(1)).current

  const handlePressIn = () => {
    Animated.timing(buttonScale, {
      toValue: 0.95,
      duration: 150,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start()
  }

  const handlePressOut = () => {
    Animated.timing(buttonScale, {
      toValue: 1,
      duration: 150,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start()
  }

  return (
    <Container
      variant={variant}
      isLoading={isLoading}
      align={align}
      size={size}
      style={{
        transform: [{ scale: buttonScale }],
      }}
    >
      <Pressable
        accessible
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        {...rest}
      >
        <TextContainer variant={variant}>
          {isLoading ? (
            <LoadingSpinner variant={variant} />
          ) : (
            <>
              <ButtonText variant={variant}>
                {children}
              </ButtonText>
              {variant === 'tertiary' && <Underline />}
            </>
          )}
        </TextContainer>
      </Pressable>
    </Container>
  )
}
