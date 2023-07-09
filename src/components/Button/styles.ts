import styled, { css } from 'styled-components/native'

import { colors } from '@n3b/color/palettes'
import type { PressableProp } from '@n3b/components/Button/Button'
import { Text } from '@n3b/components/Text'
import { createStyleVariants } from '@n3b/helpers'
import { heights, radius, spacing } from '@n3b/layout/size'
import type { Alignment, ButtonWidth, Variant } from '@n3b/types'
import { fontSizes } from '@n3b/typography/font-sizes'
import { fontWeights } from '@n3b/typography/font-weights'

type VariantProps = Pick<PressableProp, 'variant'>

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
    width: 100%;
  `,
  contain: css`
    width: auto;
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

export const TextContainer = styled.View<VariantProps>`
  margin-bottom: ${heights['1px']}px;
`

export const Underline = styled.View`
  height: ${heights['2px']}px;
  background-color: ${colors.core.primary};
`

export const ButtonText = styled(Text)<VariantProps>`
  align-self: center;
  font-weight: ${fontWeights.semibold};
  font-family: 'Plus-Jakarta-Sans-Semi-Bold';
  font-size: ${fontSizes['18px']}px;
  ${({ variant }) => textStyles[variant as Variant]};
`
