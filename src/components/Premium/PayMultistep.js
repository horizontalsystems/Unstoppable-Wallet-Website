import cn from 'classnames'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectIsConnected } from '../../redux/wallet-connect-slice'

import Container from '../Container'
import PayContainer from './PayContainer'
import FormAllowance from './FormAllowance'
import FormChoosePlan from './FormChoosePlan'
import FormPayment from './FormPayment'
import Icon from '../Icon'

import './PayMultiStep.scss'

function PayMultistep() {
  const [state, setState] = useState({})
  const [step, setStep] = useState(1)
  const isConnected = useSelector(selectIsConnected)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const stepNum = i => i >= step ? i : <Icon name="check" fill="#808085" />
  const onStep = num => {
    if (!isConnected) return
    if (!state.plan) {
      if (num > 1) return
    }
    if (!state.allowance) {
      if (num > 2) return
    }

    setStep(num)
  }

  const onFinish = (name, num) => {
    if (!isConnected) return
    setState({ ...state, [name]: true })
    setStep(num)
  }

  return (
    <PayContainer>
      <Container className="Container-analytics" clipped={false}>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6 col-sm-12">
            <div className="Pay-card Pay-card-big">
              <div className={cn('Pay-step', { active: step === 1 })}>
                <div className="Pay-stepper">
                  <div className="circle">{stepNum(1)}</div>
                  <div className="line"></div>
                </div>

                <div className="Pay-content">
                  <div className="Pay-content-head" onClick={() => onStep(1)}>
                    <div className="circle">{stepNum(1)}</div>
                    Choose Your Plan
                  </div>
                  <FormChoosePlan onFinish={onFinish} />
                </div>
              </div>

              <div className={cn('Pay-step Pay-step-space', { active: step === 2 })}>
                <div className="Pay-stepper">
                  <div className="circle">{stepNum(2)}</div>
                  <div className="line"></div>
                </div>

                <div className="Pay-content">
                  <div className="Pay-content-head" onClick={() => onStep(2)}>
                    <div className="circle">{stepNum(2)}</div>
                    Set Allowance
                  </div>
                  <FormAllowance onFinish={onFinish} />
                </div>
              </div>

              <div className={cn('Pay-step Pay-step-space', { active: step === 3 })}>
                <div className="Pay-stepper">
                  <div className="circle">{stepNum(3)}</div>
                </div>

                <div className="Pay-content">
                  <div className="Pay-content-head" onClick={() => onStep(3)}>
                    <div className="circle">{stepNum(3)}</div>
                    Payment
                  </div>
                  <FormPayment />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PayContainer>
  )
}

export default PayMultistep
