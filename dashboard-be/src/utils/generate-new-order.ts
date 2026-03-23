import { randomUUID } from 'crypto';
import { COMPANIES } from 'src/constants';
import { Order } from 'src/types/order';

export const generateNewOrder = (): Order => {
  const orderQty = Math.floor(-50 + Math.random() * 120);
  const company =
    COMPANIES[Math.floor(Math.random() * (COMPANIES.length - 1))].company;
  return {
    id: randomUUID(),
    company,
    orderQty,
    sector:
      COMPANIES.find((item) => company === item.company)?.sector || 'Unknown',
    side: orderQty >= 0 ? 'Buy' : 'Sell',
    timestamp: Date.now()
  };
};
