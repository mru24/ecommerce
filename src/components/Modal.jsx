import ReactDom from 'react-dom'
import './Modal.css'

const Modal = ({ children, isOpen }) => {
  if(!isOpen) return null;

  return ReactDom.createPortal (
    <div className="modal confirm">
      <div className="content p-4 border-2 border-gray-300 shadow-md shadow-gray-200">
        <div className="text-center p-4 pt-1">
          <div className="text-2xl">Are you sure?</div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal;