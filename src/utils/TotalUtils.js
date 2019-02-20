export function getGrandTotal(...numbers) {
  return numbers.reduce((grandTotal, num) => grandTotal + Number(num), 0);
}
