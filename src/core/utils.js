export function truncate(str, maxLength = 14) {
  if (!str || str.length <= maxLength) return str

  const charsToShow = maxLength - 3,
    frontChars = Math.ceil(charsToShow / 2),
    backChars = Math.floor(charsToShow / 2)

  return str.substring(0, frontChars) + '...' + str.substring(str.length - backChars)
}

export function subtractDiscount(discount, amount) {
  if (!discount) {
    return amount
  }

  return amount - (discount / 1000 * amount)
}
