export function calculatePct(makes, attempts) {
  const percentage = parseFloat(makes) / parseFloat(attempts) * 100.0;
  return percentage.toFixed(1)
}

export function calculateAvg(nominal, denominator) {
  const percentage = parseFloat(nominal) / parseFloat(denominator);
  return percentage.toFixed(1)
}