import type { TextProps } from 'react-native'

import { Text as SText } from '@n3b/components/Text/styles'
import type { Size, Variant } from '@n3b/types'

type Typography =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'body'
  | 'label'
  | 'caption'

export interface TextProp extends TextProps {
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
   * <Text variant="primary" />
   * <Text variant="secondary" />
   * <Text variant="tertiary" />
   * ```
   */
  variant?: Variant
  /**
   * @description
   * The font size of the text
   * @default body
   * @example
   * ```tsx
   * <Text level="body" />
   * <Text level="h3" />
   * ```
   */
  level?: Typography
}

export default function Text({
  children,
  size,
  variant,
  ...props
}: TextProp) {
  return (
    <SText size={size} variant={variant} {...props}>
      {children}
    </SText>
  )
}
