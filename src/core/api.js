export function postSubscribed(address, chain) {
  return fetch(`${process.env.REACT_APP_API_URL}/v1/auth/subscribed?address=${address}&chain=${chain}`)
}

export async function fetchLogs(chainId, address) {
  const response = chainId === 1
    ? await fetch('https://api.flipsidecrypto.com/api/v2/queries/452a82bd-8eec-4f7a-bfb6-e4a9c1cde9d7/data/latest')
    : await fetch('https://api.flipsidecrypto.com/api/v2/queries/709154d0-20e8-4d73-b6bb-6ff7070ccc27/data/latest')

  const data = await response.json()

  if (!address) {
    return data
  }

  return data.filter(i => i.ORIGIN_FROM_ADDRESS === address.toLowerCase())
}
