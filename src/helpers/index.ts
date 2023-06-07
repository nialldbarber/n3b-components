import type { Size } from '@n3b/types'
import { css } from 'styled-components/native'

export type Mapping<T extends keyof any> = {
  [key in T]?: {
    [property: string]: string | number
  }
}

/**
 * This should be based on the
 * size mapping
 */
export const getDynamicStyles = (
  /**
   * The size you want to display
   */
  size: Size = 'standard',
  /**
   * CSS property you want to update
   */
  property: string,
  /**
   * An object of the sized mappings
   */
  mapping: Mapping<Size>,
  /**
   * An optional unit
   */
  unit?: 'px' | '%',
): string => {
  const value =
    mapping[size]?.[property] ??
    mapping.standard?.[property] ??
    ''

  return `${property}: ${value}${unit || ''}}`
}

/**
 * Use this for different flavours
 * of the same style. For instance,
 * use this when you want to generate
 * styles for 'primary', 'secondary'
 * or 'tertiary'; and use a pre-defined
 * type to map it
 *
 * - Example usage
 * ```ts
 * type T = 'primary' | 'secondary' | 'tertiary'
 *
  const buttonStyles = createStyleVariants<T>({
    primary: css``,
    secondary: css``,
    tertiary: css``,
  })
 * ```
 */
export const createStyleVariants = <K extends string>(
  styles: Record<K, ReturnType<typeof css>>,
): Record<K, ReturnType<typeof css>> => {
  return styles
}
