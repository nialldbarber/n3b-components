import styled, { css } from 'styled-components/native'
import { fontWeights } from '@olio/typography/font-weights'
import type { Size } from '@olio/types'
import { colors } from '@olio/color/palettes'
import { heights } from '@olio/layout/size'
import { fontSizes } from '@olio/typography/font-sizes'
import { getDynamicStyles } from '@olio/helpers'
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
// Primary
const primaryButton = css`
  background-color: ${colors.core.primary};
`

const primaryText = css`
  color: ${colors.core.white};
`
// Primary
const secondaryButton = css`
  background-color: ${colors.core.white};
  border: 2px solid ${colors.core.primary};
`

const secondaryText = css`
  color: ${colors.core.primary};
`
// Tertiary
const tertiaryButton = css`
  background-color: ${colors.core.white};
`

const tertiaryText = css`
  color: ${colors.core.primary};
  text-decoration: underline;
  text-decoration-color: ${colors.core.primary};
  padding-bottom: 10px;
`

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
  border-radius: 50px;
  ${({ size }) =>
    css`
      ${getDynamicStyles(size, 'height', sizeMapping, 'px')}
    `};
  ${({ variant }) => variant === 'primary' && primaryButton};
  ${({ variant }) => variant === 'secondary' && secondaryButton};
  ${({ variant }) => variant === 'tertiary' && tertiaryButton};
  ${({ disabled }) => disabled && disabledButton};
`

type TextContainerProps = Pick<PressableProp, 'variant'>
export const TextContainer = styled.View<TextContainerProps>`
  align-items: center;
  align-self: flex-start;
  background-color: red;
`

export const Text = styled.Text<PressableProp>`
  align-self: center;
  font-weight: ${fontWeights.semibold};
  ${({ size }) =>
    css`
      ${getDynamicStyles(size, 'fontSize', sizeMapping, 'px')}
    `};
  ${({ variant }) => variant === 'primary' && primaryText};
  ${({ variant }) => variant === 'secondary' && secondaryText};
  ${({ variant }) => variant === 'tertiary' && tertiaryText};
`
