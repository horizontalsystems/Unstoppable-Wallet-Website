import Modal from '@/components/Modal'
import Image from 'next/image'

function Download({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center p-5">
        <Image className="d-block mx-auto mb-5" src="/images/qr.png" alt="" width="150" height="150" />
        <div className="mx-auto">
          <div className="d-grid gap-3 d-sm-flex justify-content-center">
            <button type="button" className="btn btn-warning d-flex align-items-center rounded-5 px-5">
              <Image src="/icons/google-play.png" alt="" width="16" height="16" />
              <span className="ms-2">Google Play</span>
            </button>
            <button type="button" className="btn btn-warning d-flex align-items-center rounded-5 px-5">
              <Image src="/icons/app-store.png" alt="" width="16" height="16" />
              <span className="ms-2">App Store</span>
            </button>
          </div>
          <div className="d-grid gap-3 d-sm-flex justify-content-center my-4">
            <a href="#" className="d-flex align-items-center px-4 text-decoration-none text-white">
              <Image src="/icons/f-droid.png" alt="" width="16" height="16" />
              <span className="ms-2">F-Droid</span>
            </a>
            <a href="#" className="d-flex align-items-center px-4 text-decoration-none text-white">
              <Image src="/icons/android.png" alt="" width="16" height="16" />
              <span className="ms-2">APK file</span>
            </a>
            <a href="#" className="d-flex align-items-center px-4 text-decoration-none text-white">
              <Image src="/icons/testflight.png" alt="" width="16" height="16" />
              <span className="ms-2">TestFlight</span>
            </a>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default Download
