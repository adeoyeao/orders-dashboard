import { COMPANIES } from 'src/constants';

export const getStartOfDayPosition = () => {
  const initialCompanies = COMPANIES.filter(() => Math.random() > 0.25);
  return initialCompanies.map(({ companyName }) => {
    const orderQty = Math.floor(-100 + Math.random() * 200)
    return {
      'Company': companyName,
      Sector:
        COMPANIES.find((company) => companyName === company.companyName)?.sector || 'Unknown',
      "Order Qty": orderQty,
      "Side": orderQty >= 0 ? 'Buy' : 'Sell'
    };
  });
};
