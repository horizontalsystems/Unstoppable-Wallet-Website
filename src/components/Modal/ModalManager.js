import { useModal } from './ModalContext'

export function ModalManager() {
  const { modal } = useModal()

  if (modal) {
    return (
      <div className="modal fade show" style={{ display: 'block' }} data-bs-theme="dark">
        {modal}
      </div>
    )
  }

  return null
}
