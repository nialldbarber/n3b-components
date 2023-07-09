import styled from 'styled-components/native'

type ItemProps = {
  first?: boolean
  last?: boolean
  gutter?: number
}

type ContainerProps = {
  margin?: number
}

export const Container = styled.View<ContainerProps>`
  background-color: red;
`

export const Item = styled.View<ItemProps>``
