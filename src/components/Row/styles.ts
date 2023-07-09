import styled, { css } from 'styled-components/native'

import { createStyleVariants } from '@n3b/helpers'
import type { Spacing } from '@n3b/layout/size'
import type { HorizontalAlign, VerticalAlign } from '@n3b/types'

export const verticalAlignStyles =
  createStyleVariants<VerticalAlign>({
    top: css`
      align-items: flex-start;
    `,
    center: css`
      align-items: center;
    `,
    bottom: css`
      align-items: flex-end;
    `,
  })

export const horizontalAlignStyles =
  createStyleVariants<HorizontalAlign>({
    left: css`
      justify-content: flex-start;
    `,
    center: css`
      justify-content: center;
    `,
    right: css`
      justify-content: flex-end;
    `,
  })

export const Container = styled.View<{
  outer: Spacing | number
  verticalAlign?: VerticalAlign
  horizontalAlign?: HorizontalAlign
}>`
  flex-direction: row;
  ${({ verticalAlign }) =>
    verticalAlign && verticalAlignStyles[verticalAlign]};
  ${({ horizontalAlign }) =>
    horizontalAlign && horizontalAlignStyles[horizontalAlign]};
  margin: ${({ outer }) => outer}px;
  height: 100px;
  background-color: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.2);
`

export const Item = styled.View<{}>``
