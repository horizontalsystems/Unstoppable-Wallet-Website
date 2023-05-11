import cn from 'classnames'
import { useState } from 'react'

import Container from '../Container'
import PayContainer from './PayContainer'
import FormAllowance from './FormAllowance'
import FormChoosePlan from './FormChoosePlan'
import FormPayment from './FormPayment'
import Icon from '../Icon'

import './PayMultiStep.scss'

function PayMultistep() {
  const [step, setStep] = useState(1)
  const [showDropdown, setDropdown] = useState(false)

  const stepNum = i => i >= step ? i : <Icon name="check" fill="#808085" />

  return (
    <PayContainer>
      <Container className="Container-analytics" clipped={false}>
        <div className="row justify-content-center">
          <div className="Pay-card Pay-card-big col-md-6 col-sm-12">
            <div className={cn('Pay-step', { active: step === 1 })}>
              <div className="Pay-stepper">
                <div className="circle">{stepNum(1)}</div>
                <div className="line"></div>
              </div>

              <div className="Pay-content">
                <div className="Pay-content-head" onClick={() => setStep(1)}>Choose Your Plan</div>
                <FormChoosePlan showDropdown={showDropdown} setDropdown={setDropdown} setStep={setStep} />
              </div>
            </div>

            <div className={cn('Pay-step', { active: step === 2 })}>
              <div className="Pay-stepper">
                <div className="circle">{stepNum(2)}</div>
                <div className="line"></div>
              </div>

              <div className="Pay-content">
                <div className="Pay-content-head" onClick={() => setStep(2)}>Set Allowance</div>
                <FormAllowance setStep={setStep} />
              </div>
            </div>

            <div className={cn('Pay-step', { active: step === 3 })}>
              <div className="Pay-stepper">
                <div className="circle">{stepNum(3)}</div>
              </div>

              <div className="Pay-content">
                <div className="Pay-content-head" onClick={() => setStep(3)}>Payment</div>
                <FormPayment />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PayContainer>
  )
}

export default PayMultistep
