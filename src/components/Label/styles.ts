import styled, { css } from 'styled-components/native'

import { colors } from '@n3b/color/palettes'
import type { System } from '@n3b/color/palettes'
import type { LabelProps } from '@n3b/components/Label/Label'
import { Text } from '@n3b/components/Text'
import { createStyleVariants } from '@n3b/helpers'
import { fontSizes } from '@n3b/typography/font-sizes'

const labelBackground = createStyleVariants<System>({
  success: css`
    background-color: ${colors.system.success};
  `,
  warning: css`
    background-color: ${colors.system.warning};
  `,
  error: css`
    background-color: ${colors.system.error};
  `,
  alert: css`
    background-color: ${colors.system.alert};
  `,
})

const labelText = createStyleVariants<System>({
  success: css`
    color: ${colors.core.white};
  `,
  warning: css`
    color: ${colors.core.white};
  `,
  error: css`
    color: ${colors.core.white};
  `,
  alert: css`
    color: ${colors.core.black};
  `,
})

type ContainerProps = Pick<LabelProps, 'status'>

export const Container = styled.View<ContainerProps>`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  ${({ status }) => labelBackground[status as System]};
`

export const LabelText = styled(Text)<ContainerProps>`
  font-family: 'Plus-Jakarta-Sans-Semi-Bold';
  font-size: ${fontSizes['14px']}px;
  ${({ status }) => labelText[status as System]};
`
