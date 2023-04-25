export const widths = {} as const

export const heights = {
  '5px': 5,
  '10px': 10,
  '15px': 15,
  '20px': 20,
  '25px': 25,
  '30px': 30,
  '36px': 36,
  '40px': 40,
  '46px': 46,
  '50px': 50,
  '56px': 56,
  '62px': 62,
  '64px': 64,
  '68px': 68,
  '75px': 75,
  '87px': 87,
} as const

type CustomSize = { custom: number }
export type Width = keyof typeof widths | CustomSize
export type Height = keyof typeof heights | CustomSize
