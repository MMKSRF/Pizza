export function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateStr))
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime()
  const d2 = new Date(dateStr).getTime()
  return Math.round((d2 - d1) / 60000)
}
