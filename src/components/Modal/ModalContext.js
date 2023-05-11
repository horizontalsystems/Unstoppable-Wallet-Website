import { createContext, useContext, useState } from 'react'

export const ModalContext = createContext()

export function ModalContextProvider({ children }) {
  const [modal, setModal] = useState(null)

  const closeModal = () => setModal(null)

  return (
    <ModalContext.Provider
      children={children}
      value={{
        modal,
        setModal,
        closeModal
      }}
    />
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalContextProvider')
  }

  return context
}
