export const core = {
  white: '#ffffff',
  black: '#252525',
  primary: '#374259',
  secondary: '#ff4c70',
} as const

export const system = {
  error: '#d4351c',
  success: '#00703c',
  warning: '#f47738',
  alert: '#ffdd00',
} as const

export const tonal = {} as const

export type Core = keyof typeof core
export type System = keyof typeof system
export type Tonal = keyof typeof tonal

export const colors = { core, system, tonal }
