import React from 'react'

const Input = ({ value, onChange }) => {
  return (
    <input
        value={value}
        onChange={onChange}
        style={{
          height: '45px',
          width: '250px',
          border: '1px solid',
          borderRadius: '4px',
          paddingLeft: '8px',
          marginBottom: '30px'
        }}
    />
  )
}

export default Input
