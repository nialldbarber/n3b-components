import styled from 'styled-components/native'

type ItemProps = {
  first?: boolean
  last?: boolean
  gutter?: number
}

export const Container = styled.View<ItemProps>``
export const Item = styled.View<ItemProps>``
