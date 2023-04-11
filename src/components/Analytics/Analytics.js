import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import Header from '../Header'
import Footer from '../Footer/Footer'
import Container from '../Container'
import Icon from '../Icon'

import './Analytics.scss'

function Analytics() {
  const card = (interval, intervalName, amount) => (
    <div className="Pricing-item Pricing-item-card">
      <div className="Pricing-title">{interval} {intervalName}</div>
      <div className="Pricing-amount">${amount}</div>
      <div className="Pricing-desc">${amount} per {intervalName}</div>

      <div className="Button Button-yellow Button-circle Pricing-button">
        <Link className="Pricing-button-text" to={`/analytics-pay?interval=${interval}-${intervalName}`}>
          Subscribe
        </Link>
      </div>
    </div>
  )

  const content = [
    { data: 'Price Chart', free: true, premium: true },
    { data: 'Volume', free: true, premium: true },
    { data: 'Market Cap', free: true, premium: true },
    { data: 'Diluted Market Cap', free: true, premium: true },
    { data: 'ROI vs USD, BTH, ETH', free: true, premium: true },
    { data: 'CEX volume and Rank', free: false, premium: true },
    { data: 'DEX volume and Rank', free: false, premium: true },
    { data: 'DEX Liquidity and Rank', free: false, premium: true },
    { data: 'Transaction Count and Rank', free: false, premium: true },
    { data: '30 Day Volume', free: false, premium: true },
    { data: 'Holders and Major Holders', free: false, premium: true },
    { data: 'Project TVL and Rank', free: false, premium: true },
    { data: 'Project Revenue and Rank', free: false, premium: true },
    { data: 'Reports', free: false, premium: true },
    { data: 'Treasuries', free: false, premium: true },
    { data: 'Funding', free: false, premium: true },
  ]

  return (
    <div className="Analytics">
      <div id="page-1" className="Page-black">
        <Header />
      </div>

      <div id="page-2" className="Page-dark">
        <Container clipped={false} className="Container-analytics">
          <div className="Page-header-text text-center pb-5 text-gradient">
            <h1 className="text-center">Choose Your Plan</h1>
          </div>
          <div className="row">
            <div className="col">
              {card('1', 'month', 299)}
            </div>
            <div className="col">
              {card('3', 'month', 399)}
            </div>
            <div className="col">
              {card('1', 'year', 999)}
            </div>
          </div>
          <div className="Page-header-text text-center pb-5 text-gradient mt-5">
            <h1 className="text-center">Available Features</h1>
          </div>
          <div className="row">
            <div className="Analytics-content">
              <div className="row">
                <div className="col border py-2 border-bottom-0 Analytics-content-head">
                  Data
                </div>
                <div className="col border py-2 border-bottom-0 Analytics-content-head text-center">
                  Free
                </div>
                <div className="col border py-2 border-bottom-0 Analytics-content-head Analytics-content-premium text-center">
                  Premium
                </div>
              </div>
              {content.map((item, i) => {
                return (
                  <div className="row text-light" key={i}>
                    <div className={cn('col border py-2 Analytics-content-name', { 'border-top-0': i !== 0 })}>
                      {item.data}
                    </div>
                    <div className={cn('col border py-2 border-start-0 text-center', { 'border-top-0': i !== 0 })}>
                      {item.free ? <Icon name="check" /> : <Icon name="close" />}
                    </div>
                    <div className={cn('col border py-2 border-start-0 text-center', { 'border-top-0': i !== 0 })}>
                      {item.premium ? <Icon name="check" /> : <Icon name="close" />}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </div>

      <div id="page-9" className="Page-dark">
        <Footer />
      </div>
    </div>
  )
}

export default Analytics
