import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, selectAddressFetching, selectIsFetched } from '../../redux/contract-slice'
import { useModal } from '../Modal/ModalContext'

import PayLoading from './PayLoading'
import PayHeader from './PayHeader'
import Footer from '../Footer/Footer'

import './PayContainer.scss'

function PayContainer({ children }) {
  const dispatch = useDispatch()
  const isFetched = useSelector(selectIsFetched)
  const isAddressFetching = useSelector(selectAddressFetching)
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
        {(isFetched && !isAddressFetching) ? children : <PayLoading />}
      </div>

      <div id="page-9" className="Page-dark">
        <Footer />
      </div>
    </div>
  )
}

export default PayContainer
