import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

const buscar = (e) => {
    e.preventDefault()

}

const Form = () => {
  return (
    <form onSubmit={buscar}>
        <h1>Buscar</h1>
        <Input/>
        <Button/>
    </form>
  )
}

export default Form