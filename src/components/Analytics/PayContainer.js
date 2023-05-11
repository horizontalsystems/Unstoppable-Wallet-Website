import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, selectIsFetched } from '../../redux/contract-slice'

import PayLoading from './PayLoading'
import PayHeader from './PayHeader'
import Footer from '../Footer/Footer'

import './PayContainer.scss'
import { useModal } from '../Modal/ModalContext'

function PayContainer({ children }) {
  const dispatch = useDispatch()
  const isFetched = useSelector(selectIsFetched)
  const { setModal } = useModal()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  return (
    <div data-bs-theme="dark">
      <div id="page-1" className="Page-black">
        <PayHeader setModal={setModal} />
      </div>

      <div id="page-2" className="Page-dark">
        {isFetched ? children : <PayLoading />}
      </div>

      <div id="page-9" className="Page-dark">
        <Footer />
      </div>
    </div>
  )
}

export default PayContainer
