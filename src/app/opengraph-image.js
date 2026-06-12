import { ImageResponse } from 'next/og'

export const alt = 'Unstoppable — secure, non-custodial Bitcoin & crypto wallet'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'radial-gradient(circle at 75% 25%, #1c1c22 0%, #000000 60%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: '#ffc107',
            marginBottom: 24,
          }}
        >
          Unstoppable Wallet
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05, maxWidth: 900 }}>
          Master Cryptocurrency The Easy Way
        </div>
        <div style={{ fontSize: 36, color: '#9ca3af', marginTop: 32 }}>
          Non-custodial · Multi-chain · Open-source · Private
        </div>
      </div>
    ),
    { ...size }
  )
}
