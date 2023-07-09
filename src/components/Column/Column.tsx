import React, { Children } from 'react'
import type { ReactNode } from 'react'
import type { Spacing } from 'layout/size'
import flattenChildren from 'react-flatten-children'

import { Container, Item } from '@n3b/components/Column/styles'
import { grid } from '@n3b/layout/size'

export type Props = {
  margin?: Spacing | number
  gutter?: Spacing | number
  children: ReactNode
}

export default function Column({
  margin = grid.margin,
  gutter = grid.gutter,
  children: childProp,
}: Props) {
  const children = flattenChildren(childProp)
  return (
    <Container margin={margin}>
      {Children.map(children, (child, index) => {
        const first = index === 0
        const last = index === children.length - 1
        // @ts-ignore
        const { size } = child?.props

        return (
          <Item
            first={first}
            last={last}
            gutter={gutter}
            size={size}
          >
            {child}
          </Item>
        )
      })}
    </Container>
  )
}
