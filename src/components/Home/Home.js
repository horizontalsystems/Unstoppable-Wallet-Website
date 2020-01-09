import React from 'react'

import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Wallet from '../Wallet/Wallet'
import Features from '../Features/Features'
import Highlights from '../Highlights/Highlights'
import Currencies from '../Currencies/Currencies'
import Footer from '../Footer/Footer'
import Slogan from '../Slogan/Slogan'

import './Home.scss'

function Home() {
  return (
    <div className="Home">
      <Header />
      <Banner />
      <Wallet />
      <Features />
      <Highlights />
      <Currencies />
      <Slogan />
      <Footer />
    </div>
  )
}

export default Home
