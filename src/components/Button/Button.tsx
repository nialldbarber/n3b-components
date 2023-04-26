import type { ReactNode } from 'react'
import type { PressableProps } from 'react-native'
import {
  Pressable,
  ButtonText,
  TextContainer,
} from '@olio/components/Button/styles'
import type { Size, Variant } from '@olio/types'
import { LoadingSpinner } from '@olio/components/LoadingSpinner'

export interface PressableProp extends PressableProps {
  /**
   * @description
   * The defined size of a button: a button will
   * always span the width of it's available space
   * (unless overriden). Defining the size will
   * also affect the size of the button text
   * @default standard
   * @example
   * ```tsx
   * <Button size="large" />
   * ```
   */
  size?: Size
  /**
   * @description
   * The colour variant of the button
   * @default primary
   * @example
   * ```tsx
   * // The default case 👇
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
   * The children value of the button, use this
   * if you are not using the text prop
   * @example
   * ```tsx
   * <Button>
   *  <Text>Lorem Ipsum...</Text>
   * </Button>
   * ```
   */
  children?: ReactNode
}

export default function Button({
  children,
  variant = 'primary',
  size = 'standard',
  isLoading = false,
  ...props
}: PressableProp) {
  const commonProps = {
    variant,
    size,
    isLoading,
  }
  return (
    <Pressable {...commonProps} {...props}>
      <TextContainer variant={variant}>
        {isLoading ? (
          <LoadingSpinner {...commonProps} />
        ) : (
          <ButtonText {...commonProps}>{children}</ButtonText>
        )}
      </TextContainer>
    </Pressable>
  )
}
