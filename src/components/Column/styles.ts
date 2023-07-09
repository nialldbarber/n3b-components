import styled from 'styled-components/native'

import type { Spacing } from '@n3b/layout/size'
import type { ButtonWidth } from '@n3b/types'

type ItemProps = {
  first?: boolean
  last?: boolean
  size?: ButtonWidth
  gutter: Spacing | number
}

export const Container = styled.View<{
  outer: Spacing | number
}>`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${({ outer }) => outer}px;
`

export const Item = styled.View<ItemProps>`
  padding-top: ${({ first, gutter }) => (first ? 0 : gutter)}px;
  padding-bottom: ${({ last, gutter }) => (last ? 0 : gutter)}px;
  align-self: ${({ size }) =>
    size === 'full' ? 'flex-start' : 'stretch'};
  text-align: center;
`
