import type { TextProps } from 'react-native'
import type { Size, Variant } from '@olio/types'
import { Text as SText } from '@olio/components/Text/styles'

export interface TextProp extends TextProps {
  /**
   * @description
   * The text value of the button, use this
   * if you are not using the children prop
   * @example
   * ```tsx
   * <Text text="hello world!" />
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
   * <Text size="large" />
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
   * <Text variant="primary" />
   * <Text variant="secondary" />
   * <Text variant="tertiary" />
   * ```
   */
  variant?: Variant
}

export default function Text({ text, size, variant }: TextProp) {
  return (
    <SText size={size} variant={variant}>
      {text}
    </SText>
  )
}
