import React from 'react'

const Modal = ({ children }) => {
  return (
      <div style={{
          width: '400px',
          height: '450px',
          borderRadius: '6px',
          border: '3px solid',
          margin: '50px',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
      }}>
        {children}
      </div>
  )
}

export default Modal
