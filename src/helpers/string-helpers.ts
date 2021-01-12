export const getRoomPrice = (
  rateBreakdown: {
    baseRate: number;
    taxes: number;
    localTaxes: number;
  },
  withTax: boolean,
): number => {
  if (withTax) {
    return rateBreakdown.baseRate + rateBreakdown.taxes + rateBreakdown.localTaxes;
  }

  return rateBreakdown.baseRate;
};
