import React from 'react'

const Button = ({ title, onClick }) => {
  return (
      <button
          onClick={onClick}
          style={{
              width: '200px',
              border: '2px solid',
              borderRadius: '20px',
              background: 'bisque',
              marginTop: '20px'
          }}

      >
          <h3>{title}</h3>
      </button>
  )
}

export default Button
