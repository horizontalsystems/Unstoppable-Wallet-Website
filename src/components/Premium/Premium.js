import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, selectPlans, selectToken, setPlan } from '../../redux/contract-slice'
import Container from '../Container'
import FeaturesPremium from '../Features/FeaturesPremium'
import BannerPremium from '../Banner/BannerPremium'
import PagePremium from '../Page/PagePremium'
import GetWallet from '../GetWallet'
import Header from '../Header'
import Footer from '../Footer/Footer'

import './Premium.scss'

function Premium() {
  const plans = useSelector(selectPlans)
  const token = useSelector(selectToken)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const tokenSymbol = () => token.symbol || 'USDT'

  const card = plan => {
    const priceDesc = plan.interval === 1
      ? 'for 30 days' :
      `${(plan.amount / plan.interval).toFixed(2)} ${tokenSymbol()} per ${plan.intervalName}`

    let priceSave = <>&nbsp;</>
    if (plan.interval > 1) {
      priceSave =  plan.interval === 3 ? 'Save 20%' : 'Save 40%'
    }

    return (
      <div className="Pricing-item Pricing-item-card">
        <div className="Pricing-title">{plan.interval} {plan.intervalName}</div>
        <div className="Pricing-amount">{plan.amount} {tokenSymbol()}</div>
        <div className="Pricing-desc">{priceDesc}</div>
        <div className="Pricing-save">{priceSave}</div>

        <div className="Button Button-yellow Button-circle w-100 Pricing-button">
          <Link className="Pricing-button-text text-center w-100" to="/premium-pay" onClick={() => dispatch(setPlan(plan))}>
            Subscribe
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="Premium">
      <div id="page-1" className="Page-dark overflow-hidden">
        <Header />
        <BannerPremium />
      </div>

      <div id="page-2" className="Page-dark">
        <FeaturesPremium />
      </div>

      <div id="page-3" className="Page-black">
        <PagePremium
          text="Trading Volume and Liquidity Insights"
          info="Access comprehensive insights into crypto exchange trading volumes, liquidity, and rankings of cryptocurrencies based on these criteria over various periods."
          imgBig="1_cex_dex_rank.png"
          imgSmall="1_cex_dex_vol.png"
          rtl
        />
      </div>

      <div id="page-4" className="Page-black">
        <PagePremium
          text="Blockchain Usage Insights"
          info="Gain insights into the actual real-world adoption and usage of each coin. Discover the number of active addresses, transaction counts, and rankings based on blockchain usage criteria."
          imgBig="2_active_ranks.png"
          imgSmall="2_active_Trx.png"
        />
      </div>

      <div id="page-5" className="Page-black">
        <PagePremium
          text="Coin Distribution Analysis"
          info="Assess the fairness and stability of each coin by exploring its distribution dynamics among holders. Gain insights into the number of holders, concentration of supply, and distribution rankings. Identify coins with balanced ownership."
          imgBig="3_holders_list.png"
          imgSmall="3_holders_chain.png"
          rtl
        />
      </div>

      <div id="page-6" className="Page-black">
        <PagePremium
          text="Value Locked and Revenue Insights"
          info="Explore the amount of assets locked with project smart contracts and discover the revenue project generates for its token holders. Get rankings based on these criteria."
          imgBig="4_chart_tvlrank.png"
          imgSmall="4_tvl.png"
        />
      </div>

      <div id="page-7" className="Page-black">
        <PagePremium
          text="Audits, Funding and Reports"
          info="Bypass the traditional finance ecosystem layer and enter the world of Decentralized Finances (DeFi) with unconditional opportunities."
          imgBig="5_reports.png"
          imgSmall="5_audits.png"
          rtl
        />
      </div>

      <div id="page-8" className="Page-black">
        <Container clipped={false}>
          <div className="Premium-space-top Premium-space-bottom">
            <div className="Page-Premium-title Page-Premium-header-text text-gradient text-center">
              Upgrade Your Crypto Analysis
            </div>
            <div className="raw d-flex justify-content-center">
              <div className="col-sm-12 col-md-8">
                <p className="text-center text-grey mb-4 pb-4">
                  Unlock exclusive cryptocurrency analytics and trend identification. Choose your subscription tier and gain a competitive edge in the
                  world of crypto investments.
                </p>
              </div>
            </div>

            <div className="raw d-flex justify-content-center">
              <div className="col-sm-12 col-md-10">
                <div className="row gy-4">
                  {plans.map(item => (
                    <div className="col" key={item.amount}>
                      {card(item)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="Page-dark">
        <div className="Wallet-download">
          <GetWallet />
        </div>
      </div>

      <div id="page-9" className="Page-dark">
        <Footer />
      </div>
    </div>
  )
}

export default Premium
