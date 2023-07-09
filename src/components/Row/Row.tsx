import React, { Children } from 'react'
import type { ReactNode } from 'react'
import flattenChildren from 'react-flatten-children'

import { Container, Item } from '@n3b/components/Row/styles'
import type { Spacing } from '@n3b/layout/size'
import { grid } from '@n3b/layout/size'
import type {
  HorizontalAlign,
  VerticalAlign,
} from '@n3b/types'

export type Props = {
  /**
   * @description
   * The outer spacing of the column
   * and the inner guttering between items
   * @example
   * ```tsx
   * <Row space={{ outer: 20, gutter: 10 }}>
   *  <Text>Item 1</Text>
   *  <Text>Item 2</Text>
   *  <Text>Item 3</Text>
   * </Row>
   * ```
   */
  space: {
    outer?: Spacing | number
    gutter?: Spacing | number
  }
  verticalAlign?: VerticalAlign
  horizontalAlign?: HorizontalAlign
  children: ReactNode
}

export default function Row({
  space: { outer = grid.margin, gutter = grid.gutter },
  verticalAlign,
  horizontalAlign,
  children: childProp,
}: Props) {
  const children = flattenChildren(childProp)
  return (
    <Container
      outer={outer}
      verticalAlign={verticalAlign}
      horizontalAlign={horizontalAlign}
    >
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
