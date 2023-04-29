import styled, { css } from 'styled-components/native'
import { fontWeights } from '@olio/typography/font-weights'
import type {
  Alignment,
  ButtonWidth,
  Variant,
} from '@olio/types'
import { colors } from '@olio/color/palettes'
import { heights, radius, spacing } from '@olio/layout/size'
import { fontSizes } from '@olio/typography/font-sizes'
import { Text } from '@olio/components/Text'
import { createStyleVariants } from '@olio/helpers'
import type { PressableProp } from '@olio/components/Button/Button'

type TextContainerProps = Pick<PressableProp, 'variant'>

/**
 * Addtional css
 */
const buttonStyles = createStyleVariants<Variant>({
  primary: css`
    background-color: ${colors.core.primary};
  `,
  secondary: css`
    background-color: ${colors.core.white};
    border: 2px solid ${colors.core.primary};
  `,
  tertiary: css`
    background-color: ${colors.core.white};
  `,
})

const textStyles = createStyleVariants<Variant>({
  primary: css`
    color: ${colors.core.white};
  `,
  secondary: css`
    color: ${colors.core.primary};
  `,
  tertiary: css`
    color: ${colors.core.primary};
    padding-bottom: ${heights['3px']}px;
  `,
})

const disabledButton = css`
  opacity: 0.5;
`

/**
 * Components
 */

const alignStyles = createStyleVariants<Alignment>({
  left: css`
    align-self: flex-start;
  `,
  center: css`
    flex-direction: row;
    justify-content: center;
  `,
  right: css`
    flex-direction: row;
    justify-content: flex-end;
  `,
})

const sizeStyles = createStyleVariants<ButtonWidth>({
  full: css`
    flex-grow: 1;
  `,
  contain: css`
    align-self: baseline;
  `,
})

export const Pressable = styled.Pressable<PressableProp>`
  justify-content: center;
  align-items: center;
  border-radius: ${radius['50px']}px;
  height: ${heights['50px']}px;
  padding-left: ${spacing['25px']}px;
  padding-right: ${spacing['25px']}px;
  ${({ size }) => sizeStyles[size as ButtonWidth]};
  ${({ align }) => alignStyles[align as Alignment]};
  ${({ variant }) => buttonStyles[variant as Variant]};
  ${({ disabled }) => disabled && disabledButton};
`

export const TextContainer = styled.View<TextContainerProps>`
  margin-bottom: ${heights['1px']}px;
`

export const Underline = styled.View`
  height: ${heights['2px']}px;
  background-color: ${colors.core.primary};
`

export const ButtonText = styled(Text)<PressableProp>`
  align-self: center;
  font-weight: ${fontWeights.semibold};
  font-family: 'Plus-Jakarta-Sans-Semi-Bold';
  font-size: ${fontSizes['18px']}px;
  ${({ variant }) => textStyles[variant as Variant]};
`
