import React, { useState } from 'react'
import cn from 'classnames'
import Header from '../Header'
import Footer from '../Footer/Footer'
import Container from '../Container'

import './Pay.scss'
import Icon from '../Icon'

function Pay() {
  const [step, setStep] = useState(1)
  const stepNum = index => {
    if (index >= step) {
      return index
    } else {
      return <Icon name="check" fill="#808085" />
    }
  }

  return (
    <div className="Pay">
      <div id="page-1" className="Page-black">
        <Header />
      </div>

      <div id="page-2" className="Page-dark">
        <Container clipped={false} className="Container-pay">
          <div className="row justify-content-center">
            <div className="Pay-card col-md-6 col-sm-12">
              <div className={cn('Pay-step', { active: step === 1 })}>
                <div className="Pay-stepper">
                  <div className="circle">{stepNum(1)}</div>
                  <div className="line"></div>
                </div>

                <div className="Pay-content">
                  <div className="Pay-content-head" onClick={() => setStep(1)}>Choose Your Plan</div>
                  <div className="Pay-content-body">
                    <form>
                      <fieldset className="Pay-fieldset">
                        <div className="row mb-3">
                          <label htmlFor="selectPlan" className="col-sm-6 col-form-label">Selected Plan</label>
                          <div className="col-sm-6">
                            <select id="selectPlan" className="form-select">
                              <option>1 Month</option>
                              <option>3 Month</option>
                              <option>1 Year</option>
                            </select>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="selectPlan" className="col-sm-6 col-form-label">Chain</label>
                          <div className="col-sm-6">
                            <select id="selectPlan" className="form-select">
                              <option>Ethereum</option>
                            </select>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-6 col-form-label">Cost</div>
                          <div className="col-sm-6">
                            $300
                          </div>
                        </div>
                      </fieldset>
                      <button type="submit" className="Button Button-yellow Button-circle mt-4 w-100 border-0">
                        Next
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className={cn('Pay-step', { active: step === 2 })}>
                <div className="Pay-stepper">
                  <div className="circle">{stepNum(2)}</div>
                  <div className="line"></div>
                </div>

                <div className="Pay-content">
                  <div className="Pay-content-head" onClick={() => setStep(2)}>Set Allowance</div>
                  <div className="Pay-content-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </div>
              </div>

              <div className={cn('Pay-step', { active: step === 3 })}>
                <div className="Pay-stepper">
                  <div className="circle">{stepNum(3)}</div>
                </div>

                <div className="Pay-content">
                  <div className="Pay-content-head" onClick={() => setStep(3)}>Payment</div>
                  <div className="Pay-content-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                </div>
              </div>
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

export default Pay
