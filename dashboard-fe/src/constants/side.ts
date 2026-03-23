export const SIDE = {
  BUY: 'Buy',
  SELL: 'Sell'
} as const

export type SideType = (typeof SIDE)[keyof typeof SIDE];