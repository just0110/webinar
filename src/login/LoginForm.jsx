import React from 'react'
import Modal from '../kit/Modal'
import Input from '../kit/Input'
import Button from '../kit/Button'

const LoginForm = () => {
  return (
      <Modal>
        <Input value="login" onChange={() => (console.log('change login'))} />
        <Input value="password" onChange={() => (console.log('change password'))} />
        <Button title="GO!" onClick={() => (console.log('Go!'))} />
      </Modal>
  )
}

export default LoginForm
