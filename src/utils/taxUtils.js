export function getTaxPercentage(totalValue, taxValue) {
  if (totalValue <= 0 && taxValue <= 0) return 0;
  return Math.round(taxValue * 100 / totalValue);
}
