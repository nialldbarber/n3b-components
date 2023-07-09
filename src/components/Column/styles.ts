import styled from 'styled-components/native'

import type { Props } from '@n3b/components/Column/Column'
import type { ButtonWidth } from '@n3b/types'

type ItemProps = {
  first?: boolean
  last?: boolean
  size?: ButtonWidth
} & Pick<Props, 'gutter'>

export const Container = styled.View<Pick<Props, 'margin'>>`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${({ margin }) => margin}px;
  background-color: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.2);
`

export const Item = styled.View<ItemProps>`
  padding-top: ${({ first, gutter }) => (first ? 0 : gutter)}px;
  padding-bottom: ${({ last, gutter }) => (last ? 0 : gutter)}px;
  align-self: ${({ size }) =>
    size === 'full' ? 'flex-start' : 'stretch'};
  text-align: center;
`
