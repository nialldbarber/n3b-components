import type { Size } from '@olio/types'

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
