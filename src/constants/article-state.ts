export const INACTIVE = 'inactive'
export const ACTIVE = 'active'
export const DELETED = 'deleted'
export const EXPIRED = 'expired'
export const PENDING = 'pending'
export const PICKUP_ARRANGED = 'pickup_arranged'
export const UNKNOWN = 'unknown'

export const ERROR = 'error'
export const SUCCESS = 'success'
export const WARNING = 'warning'
export const ALERT = 'alert'

export const genericStates = {
  [ERROR]: ERROR,
  [SUCCESS]: SUCCESS,
  [WARNING]: WARNING,
  [ALERT]: ALERT,
} as const

export const articleState = {
  [INACTIVE]: INACTIVE,
  [ACTIVE]: ACTIVE,
  [DELETED]: DELETED,
  [EXPIRED]: EXPIRED,
  [PENDING]: PENDING,
  [PICKUP_ARRANGED]: PICKUP_ARRANGED,
  [UNKNOWN]: UNKNOWN,
} as const

export type ArticleState = keyof typeof articleState
export type GenericState = keyof typeof genericStates
