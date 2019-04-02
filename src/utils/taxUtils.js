export function getTaxPercentage(totalValue, taxValue) {
  const parsedTotalValue = Number(totalValue);
  const parsedTaxValue = Number(taxValue);

  if (parsedTotalValue <= 0 && parsedTaxValue <= 0) return 0;
  return Number(((parsedTaxValue * 100) / parsedTotalValue).toPrecision(2));
}

export function getTaxPercentageList(totalValue, ...taxValues) {
  const parsedTotalValue = Number(totalValue);

  const taxPercentageList = [];
  let currentTotalValue = parsedTotalValue;

  taxValues.forEach(taxValue => {
    const parsedTaxValue = Number(taxValue);
    taxPercentageList.push(getTaxPercentage(currentTotalValue, parsedTaxValue));
    currentTotalValue += parsedTaxValue;
  });

  return taxPercentageList;
}

export function getTotalTaxPercentage(taxPercentageList) {
  const result = taxPercentageList.reduce(
    (total, taxPercentage) => total * (1 + taxPercentage / 100),
    1
  );
  return (result - 1) * 100;
}
