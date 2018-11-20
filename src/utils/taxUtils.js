export function getTaxPercentage(totalValue, taxValue) {
  if (totalValue <= 0 && taxValue <= 0) return 0;
  return Number((taxValue * 100 / totalValue).toPrecision(2));
}

export function getTotalTaxPercentage(totalValue, ...taxValues) {
  let totalTaxPercentage = 0;
  let currentTotalValue = totalValue;

  taxValues.forEach(taxValue => {
    totalTaxPercentage += getTaxPercentage(currentTotalValue, taxValue);
    currentTotalValue = totalValue + taxValue;
  });

  return totalTaxPercentage;
}
