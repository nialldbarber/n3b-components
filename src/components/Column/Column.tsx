import React, { Children } from 'react'
import type { ReactNode } from 'react'
import flattenChildren from 'react-flatten-children'

import { Container, Item } from '@n3b/components/Column/styles'
import type { Spacing } from '@n3b/layout/size'
import { grid } from '@n3b/layout/size'

export type Props = {
  /**
   * @description
   * The outer spacing of the column
   * and the inner guttering between items
   * @example
   * ```tsx
   * <Column space={{ outer: 20, gutter: 10 }}>
   *  <Text>Item 1</Text>
   *  <Text>Item 2</Text>
   *  <Text>Item 3</Text>
   * </Column>
   * ```
   */
  space: {
    outer: Spacing | number
    gutter: Spacing | number
  }
  children: ReactNode
}

export default function Column({
  space: { outer = grid.margin, gutter = grid.gutter },
  children: childProp,
}: Props) {
  const children = flattenChildren(childProp)
  return (
    <Container outer={outer}>
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
