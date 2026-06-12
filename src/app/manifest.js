export default function manifest() {
  return {
    name: 'Unstoppable — Bitcoin & Crypto Wallet',
    short_name: 'Unstoppable',
    description:
      'Secure, non-custodial Bitcoin & crypto wallet for true self-custody. Multi-chain, open-source and private.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
