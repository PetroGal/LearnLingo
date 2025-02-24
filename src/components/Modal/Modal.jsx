import { useEffect } from "react"
import "./Modal.css" // Create this file for styling

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className='modal-backdrop' onClick={onClose}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <button className='modal-close' onClick={onClose}>
          ✖
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal
