import type { ReactNode } from 'react'
import type { PressableProps } from 'react-native'
import {
  Pressable,
  Text,
  TextContainer,
} from '@olio/components/Button/styles'
import type { Size, Variant } from '@olio/types'
import { LoadingSpinner } from '@olio/components/LoadingSpinner'

export interface PressableProp extends PressableProps {
  /**
   * @description
   * The text value of the button, use this
   * if you are not using the children prop
   * @example
   * ```tsx
   * <Button text="hello world!" />
   * ```
   */
  text?: string
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
}

export default function Button({
  text,
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
          <LoadingSpinner />
        ) : (
          <Text {...commonProps} text={text} />
        )}
      </TextContainer>
    </Pressable>
  )
}
