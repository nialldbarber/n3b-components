import { Animated } from 'react-native'
import styled, { css } from 'styled-components/native'

import { colors } from '@n3b/color/palettes'
import type { LoadingSpinnerProps } from '@n3b/components/LoadingSpinner/LoadingSpinner'
import { getDynamicStyles, Mapping } from '@n3b/helpers'
import { heights } from '@n3b/layout/size'
import { Size } from '@n3b/types'

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
    width: heights['25px'],
    height: heights['25px'],
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

/* prettier-ignore */
export const Spinner = styled(Animated.View)<LoadingSpinnerProps>`
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
  border-radius: 50px;
  border-width: 3px;
  border-left-color: transparent;
`
