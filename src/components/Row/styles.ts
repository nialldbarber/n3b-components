import styled, { css } from 'styled-components/native'

import { createStyleVariants } from '@n3b/helpers'
import type { Spacing } from '@n3b/layout/size'
import type { HorizontalAlign, VerticalAlign } from '@n3b/types'

export const verticalAlign = createStyleVariants<VerticalAlign>({
  top: css``,
  center: css``,
  bottom: css``,
})

export const horizontalAlign =
  createStyleVariants<HorizontalAlign>({
    left: css``,
    center: css``,
    right: css``,
  })

export const Container = styled.View<{
  outer: Spacing | number
}>`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: ${({ outer }) => outer}px;
  background-color: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.2);
`

export const Item = styled.View<{}>``
