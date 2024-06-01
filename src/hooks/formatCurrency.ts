export const formatCurrency = (currency: number) => {
  return new Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD'
  }).format(currency)
}
