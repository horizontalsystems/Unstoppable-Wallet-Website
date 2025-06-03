import Image from 'next/image'
import React, { useState } from 'react'
import { Tooltip } from 'react-tooltip'

function DotateCard({ chain, address }) {
  const [copied, setCopied] = useState(false)

  return (
    <div className="card card-regular border-0 rounded-24 bg-steel-20 overflow-hidden justify-content-between w-100">
      <div className="p-3">
        <Image src={`/icons/chains/${chain}.svg`} alt="" width="32" height="32" />
      </div>
      <div className="d-flex flex-column justify-content-between h-100">
        <div className="px-3">
          <div>
            <div className="text-steel-light border-top pt-3 text-start text-capitalize">
              {chain} address
            </div>
            <div className="text-grey pt-3 mt-2 text-center">
              {address}
            </div>
          </div>
        </div>
        <div className="p-3 d-flex justify-content-between gap-2">
          <Tooltip
            id={`${chain}-dotate`}
            data-tooltip-place="top"
            variant="light"
            className="QrCodeTooltip"
            content={<Image src={`/images/donate/${chain}.png`} alt="" width="152" height="162" />}
          />

          <div
            className="btn rounded-5 w-100 Button-steal20"
            onClick={() => {
              navigator.clipboard.writeText(address)
              setCopied(true)
            }}
          >
            <div className="text-center w-100">
              {copied ? 'Copied' : 'Copy'}
            </div>
          </div>

          <div className="sm-hidden" role="button" data-tooltip-id={`${chain}-dotate`}>
            <Image src="/icons/qr.svg" alt="" width="36" height="36" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DotateCard
