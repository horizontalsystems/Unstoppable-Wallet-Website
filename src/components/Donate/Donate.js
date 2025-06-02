import React from 'react'
import DotateCard from './DotateCard'

function Donate() {
  return (
    <div className="Donate-cards pt-5">
      <DotateCard
        key="bitcoin"
        chain="bitcoin"
        address="bc1qufeeaxakvygkp8trtwyl3uutx4sujr3ufwrsfm" />
      <DotateCard
        key="ethereum"
        chain="ethereum"
        address="0x1DFBE326119fBE9ed30b85d8aB2BcD38C0e4C8F8" />
      <DotateCard
        key="tron"
        chain="tron"
        address="TX1k72yksnCaVcvyMsCXpq7E2bwN1vuVZz" />
      <DotateCard
        key="monero"
        chain="monero"
        address="49WjbuKDVJP9BCqD8fT4JqgyoWintsSPp8W67ggGjbDm88nHcLBwtA28hYfauBx5et5LMR6GuNM8BjFzvahGUi9QHwiWK4t" />
    </div>
  )
}

export default Donate
