import { Animated } from 'react-native'
import styled, { css } from 'styled-components/native'
import { Mapping, getDynamicStyles } from '@olio/helpers'
import type { LoadingSpinnerProps } from '@olio/components/LoadingSpinner/LoadingSpinner'
import { Size } from '@olio/types'
import { heights } from '@olio/layout/size'
import { colors } from '@olio/color/palettes'

/**
 * Helpers
 */
const sizeMapping: Mapping<Size> = {
  xsmall: {
    width: heights['15px'],
    height: heights['15px'],
  },
  small: {
    width: heights['25px'],
    height: heights['25px'],
  },
  medium: {
    width: heights['36px'],
    height: heights['36px'],
  },
  standard: {
    width: heights['30px'],
    height: heights['30px'],
  },
  large: {
    width: heights['62px'],
    height: heights['62px'],
  },
  xlarge: {
    width: heights['75px'],
    height: heights['75px'],
  },
  xxlarge: {
    width: heights['87px'],
    height: heights['87px'],
  },
}

const primarySpinner = css`
  border-color: ${colors.core.white};
`

const secondarySpinner = css`
  border-color: ${colors.core.primary};
`

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`

export const Spinner = styled(
  Animated.View,
)<LoadingSpinnerProps>`
  ${({ size }) =>
    css`
      ${getDynamicStyles(size, 'width', sizeMapping, 'px')}
    `};
  ${({ size }) =>
    css`
      ${getDynamicStyles(size, 'height', sizeMapping, 'px')}
    `};
  ${({ variant }) => variant === 'primary' && primarySpinner};
  ${({ variant }) =>
    variant === 'secondary' && secondarySpinner};
  border-radius: 25px;
  border-width: 4px;
  border-left-color: transparent;
`
