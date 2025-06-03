import ReactModal from 'react-modal'

const styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 300,
    color: 'lightsteelblue',
    borderRadius: '24px',
    border: 'none',
    background: 'rgba(255, 255, 255, 0.20)',
    backdropFilter: 'blur(30px)',
    WebkitBackdropFilter: 'blur(30px)'
  },
  overlay: {
    background: 'transparent',
    zIndex: 9999,
  }
}

export function Modal({ isOpen, onClose, children }) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={onClose} style={styles} ariaHideApp={false}>
      {children}
    </ReactModal>
  )
}

export default Modal
