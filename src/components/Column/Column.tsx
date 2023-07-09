import React, { Children } from 'react'
import type { ReactNode } from 'react'
import flattenChildren from 'react-flatten-children'
import { View } from 'react-native'

import { Item } from '@n3b/components/Column/styles'

type Props = {
  children: ReactNode
}

export default function Column({
  margin,
  gutter,
  children: childProp,
}: Props) {
  const children = flattenChildren(childProp)

  return (
    <Container margin={margin}>
      {Children.map(children, (child, index) => {
        const first = index === 0
        const last = index === children.length - 1
        return (
          <Item first={first} last={last} gutter={gutter}>
            {child}
          </Item>
        )
      })}
    </Container>
  )
}
