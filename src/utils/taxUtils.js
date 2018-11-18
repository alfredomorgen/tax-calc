export function getTaxPercentage(totalValue, taxValue) {
  return Math.round(taxValue * 100 / totalValue);
}
