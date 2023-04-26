import styled, { css } from 'styled-components/native'
import { fontWeights } from '@olio/typography/font-weights'
import type { Size, Variant } from '@olio/types'
import { colors } from '@olio/color/palettes'
import { heights, radius } from '@olio/layout/size'
import { fontSizes } from '@olio/typography/font-sizes'
import {
  createVariantStyles,
  getDynamicStyles,
} from '@olio/helpers'
import { Text } from '@olio/components/Text'
import type { Mapping } from '@olio/helpers'
import type { PressableProp } from '@olio/components/Button/Button'

/**
 * Helpers
 */
const sizeMapping: Mapping<Size> = {
  xsmall: {
    height: heights['15px'],
    fontSize: fontSizes['5px'],
  },
  small: {
    height: heights['25px'],
    fontSize: fontSizes['10px'],
  },
  medium: {
    height: heights['36px'],
    fontSize: fontSizes['14px'],
  },
  standard: {
    height: heights['50px'],
    fontSize: fontSizes['18px'],
  },
  large: {
    height: heights['62px'],
    fontSize: fontSizes['22px'],
  },
  xlarge: {
    height: heights['75px'],
    fontSize: fontSizes['26px'],
  },
  xxlarge: {
    height: heights['87px'],
    fontSize: fontSizes['30px'],
  },
}

/**
 * Addtional css
 */
const buttonStyles = createVariantStyles({
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

const textStyles = createVariantStyles({
  primary: css`
    color: ${colors.core.white};
  `,
  secondary: css`
    color: ${colors.core.primary};
  `,
  tertiary: css`
    color: ${colors.core.primary};
    text-decoration: underline;
    text-decoration-color: ${colors.core.primary};
    padding-bottom: 10px;
  `,
})

const disabledButton = css`
  opacity: 0.5;
`

/**
 * Components
 */
export const Pressable = styled.Pressable<PressableProp>`
  align-self: stretch;
  justify-content: center;
  justify-content: center;
  border-radius: ${radius['50px']}px;
  ${({ size }) =>
    css`
      ${getDynamicStyles(size, 'height', sizeMapping, 'px')}
    `};
  ${({ variant }) => buttonStyles[variant as Variant]};
  ${({ disabled }) => disabled && disabledButton};
`

type TextContainerProps = Pick<PressableProp, 'variant'>
export const TextContainer = styled.View<TextContainerProps>`
  align-items: center;
  /* align-self: flex-start; */
  align-self: center;
`

export const ButtonText = styled(Text)<PressableProp>`
  align-self: center;
  font-weight: ${fontWeights.semibold};
  ${({ size }) =>
    css`
      ${getDynamicStyles(size, 'fontSize', sizeMapping, 'px')}
    `};
  ${({ variant }) => textStyles[variant as Variant]};
`
