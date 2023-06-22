import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, selectPlans, selectToken, setPlan } from '../../redux/contract-slice'
import Container from '../Container'
import FeaturesList from '../Features/FeaturesList'
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

  const card = plan => (
    <div className="Pricing-item Pricing-item-card">
      <div className="Pricing-title">{plan.interval} {plan.intervalName}</div>
      <div className="Pricing-amount">{plan.amount} {tokenSymbol()}</div>
      <div className="Pricing-desc">{(plan.amount / plan.interval).toFixed(2)} {tokenSymbol()} per {plan.intervalName}</div>

      <div className="Button Button-yellow Button-circle w-100 Pricing-button">
        <Link className="Pricing-button-text text-center w-100" to="/premium-pay" onClick={() => dispatch(setPlan(plan))}>
          Subscribe
        </Link>
      </div>
    </div>
  )

  return (
    <div className="Premium">
      <div id="page-1" className="Page-black overflow-hidden">
        <Header />
        <BannerPremium />
      </div>

      <div id="page-2" className="Page-black">
        <FeaturesList isPremium />
      </div>

      <div id="page-3" className="Page-black">
        <PagePremium
          text="Historical Charts and Volumes"
          info="Bypass the traditional finance ecosystem layer and enter the world of Decentralized Finances (DeFi) with unconditional opportunities."
          imgBig="1_cex_dex_rank.png"
          imgSmall="1_cex_dex_vol.png"
          rtl
        />
      </div>

      <div id="page-4" className="Page-black">
        <PagePremium
          text="Project Activity"
          info="Bypass the traditional finance ecosystem layer and enter the world of Decentralized Finances (DeFi) with unconditional opportunities."
          imgBig="2_active_ranks.png"
          imgSmall="2_active_Trx.png"
        />
      </div>

      <div id="page-5" className="Page-black">
        <PagePremium
          text="Project Major Holders"
          info="Bypass the traditional finance ecosystem layer and enter the world of Decentralized Finances (DeFi) with unconditional opportunities."
          imgBig="3_holders_list.png"
          imgSmall="3_holders_chain.png"
          rtl
        />
      </div>

      <div id="page-6" className="Page-black">
        <PagePremium
          text="Project TVL and Revenue"
          info="Bypass the traditional finance ecosystem layer and enter the world of Decentralized Finances (DeFi) with unconditional opportunities."
          imgBig="4_chart_tvlrank.png"
          imgSmall="4_tvl.png"
        />
      </div>

      <div id="page-7" className="Page-black">
        <PagePremium
          text="Audits, Funding and Reports  "
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
              Choose Your Plan
            </div>
            <div className="raw d-flex justify-content-center">
              <div className="col-sm-12 col-md-8">
                <p className="text-center text-grey mb-4 pb-4">
                  Bypass the traditional finance ecosystem layer and enter the world of Decentralized Finances (DeFi) with unconditional
                  opportunities.
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
