export const SIDE = {
  BUY: 'buy',
  SELL: 'sell'
} as const

export type SideType = (typeof SIDE)[keyof typeof SIDE];