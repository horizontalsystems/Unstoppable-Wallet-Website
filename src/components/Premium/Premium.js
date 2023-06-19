import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, selectPlans, setPlan } from '../../redux/contract-slice'
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
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const card = plan => (
    <div className="Pricing-item Pricing-item-card">
      <div className="Pricing-title">{plan.interval} {plan.intervalName}</div>
      <div className="Pricing-amount">${plan.amount}</div>
      <div className="Pricing-desc">${(plan.amount / plan.interval).toFixed(2)} per {plan.intervalName}</div>

      <div className="Button Button-yellow Button-circle Pricing-button">
        <Link className="Pricing-button-text" to="/premium-pay" onClick={() => dispatch(setPlan(plan))}>
          Subscribe
        </Link>
      </div>
    </div>
  )

  return (
    <div className="Premium">
      <div id="page-1" className="Page-dark overflow-hidden">
        <Header />
        <BannerPremium />
      </div>

      <div id="page-2" className="Page-dark">
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

      <div id="page-4" className="Page-dark">
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

      <div id="page-6" className="Page-dark">
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

      <div id="page-8" className="Page-dark">
        <Container clipped={false}>
          <div className="Section-space-top Section-space-bottom">
            <div className="Page-header-text text-center pb-3 text-gradient">
              <h1 className="text-center">Choose Your Plan</h1>
            </div>
            <div className="text-center">
              <p className="text-grey mb-4 pb-4">
                Bypass the traditional finance ecosystem layer and enter the world of Decentralized Finances (DeFi) with unconditional opportunities.
              </p>
            </div>

            <div className="row">
              {plans.map(item => (
                <div className="col" key={item.amount}>
                  {card(item)}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="Page-black">
        <div className="Wallet-download">
          <GetWallet />
        </div>
      </div>

      <div id="page-9" className="Page-black">
        <Footer />
      </div>
    </div>
  )
}

export default Premium
