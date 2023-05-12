import { BigNumber } from '@ethersproject/bignumber'

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

export function rawAmountToRate(amount) {
  if (!amount) return amount
  return amount / 1000
}

export function convertFromRawAmount(rawAmount, decimals) {
  return BigNumber.from(rawAmount).div(BigNumber.from(10).pow(decimals))
}

export function convertToRawAmount(amount, decimals) {
  return BigNumber.from(amount).mul(BigNumber.from(10).pow(decimals))
}

export function convertToDecimals(amount, fromDecimals, toDecimals) {
  if (fromDecimals > toDecimals) {
    return BigNumber.from(amount).div(BigNumber.from(10).pow(fromDecimals - toDecimals))
  } else if (fromDecimals < toDecimals) {
    return BigNumber.from(amount).mul(BigNumber.from(10).pow(toDecimals - fromDecimals))
  } else {
    return amount
  }
}
