import type { ViewProps } from 'react-native'
import type {
  ArticleState,
  GenericState,
} from '@olio/constants/article-state'
import {
  Container,
  LabelText,
} from '@olio/components/Label/styles'

/**
  export type ContainerPropTypes = {
    children: React.Node,
    collected: boolean,
    status: string,
    label: string,
    inLargeCard?: boolean,
    ...ViewType,
  }
 */

export interface LabelProps extends ViewProps {
  /**
   * @description
   * The text that the label will show
   * @example
   * ```tsx
   * <Label label="Lorem Ipsum..." />
   * ```
   */
  label: string
  /**
   * @description
   * The status of the label. Based on the
   * type provided, the output will show
   * a different design
   * @example
   * ```tsx
   * <Label status="inactive" />
   * ```
   */
  status: ArticleState | GenericState
}

export default function Label({ label, status }: LabelProps) {
  return (
    <Container status={status}>
      <LabelText status={status}>{label}</LabelText>
    </Container>
  )
}
