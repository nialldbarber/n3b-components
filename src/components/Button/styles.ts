import styled, { css } from 'styled-components/native'
import { fontWeights } from '@olio/typography/font-weights'
import type { Variant } from '@olio/types'
import { colors } from '@olio/color/palettes'
import { heights, radius, spacing } from '@olio/layout/size'
import { fontSizes } from '@olio/typography/font-sizes'
import { createStrictStyles } from '@olio/helpers'
import { Text } from '@olio/components/Text'
import type { PressableProp } from '@olio/components/Button/Button'

type TextContainerProps = Pick<PressableProp, 'variant'>

/**
 * Addtional css
 */
const buttonStyles = createStrictStyles<Variant>({
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

const textStyles = createStrictStyles<Variant>({
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
export const Pressable = styled.Pressable<PressableProp>`
  align-self: ${({ size }) =>
    size === 'full' ? 'stretch' : 'flex-start'};
  justify-content: center;
  align-items: center;
  border-radius: ${radius['50px']}px;
  height: ${heights['50px']}px;
  padding-left: ${spacing['25px']}px;
  padding-right: ${spacing['25px']}px;
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
