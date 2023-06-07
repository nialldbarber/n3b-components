import type { ReactNode } from 'react'
import type { PressableProps } from 'react-native'

import {
  ButtonText,
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
}

export default function Button({
  children,
  variant = 'primary',
  align = 'left',
  size = 'full',
  isLoading = false,
  ...rest
}: PressableProp) {
  const commonProps = {
    variant,
    isLoading,
  }
  return (
    <Pressable
      align={align}
      size={size}
      {...commonProps}
      {...rest}
    >
      <TextContainer variant={variant}>
        {isLoading ? (
          <LoadingSpinner {...commonProps} />
        ) : (
          <>
            <ButtonText {...commonProps}>{children}</ButtonText>
            {variant === 'tertiary' && <Underline />}
          </>
        )}
      </TextContainer>
    </Pressable>
  )
}
