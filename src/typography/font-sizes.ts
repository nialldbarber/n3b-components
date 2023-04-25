export const fontSizes = {
  '5px': 5,
  '8px': 8,
  '10px': 10,
  '12px': 12,
  '14px': 14,
  '16px': 16,
  '18px': 18,
  '20px': 20,
  '22px': 22,
  '24px': 24,
  '26px': 26,
  '30px': 30,
  '36px': 36,
  '40px': 40,
  '50px': 50,
} as const

type CustomSize = { custom: number }
export type FontSizes = keyof typeof fontSizes | CustomSize
