import { useState } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Card from '../Card/Card'



const Form = () => {

  const [cep, setCep] = useState('')

  const [historico, setHistorico] = useState([])

  const [card, setCard] = useState('')

  const handleChange = (e) => {
    setCep(e.target.value)
  }

  async function handleRequisicao(){
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const json = await response.json()
    console.log(json);
    setCard(json)
    setHistorico([...historico, json])
}

  const buscar = (e) => {
      e.preventDefault()
      setCard('')
      handleRequisicao()
  }

  return (
    <div>
      <form onSubmit={buscar}>
          <h1>Buscar</h1>
          <Input handleChange = {handleChange}/>
          <Button/>
      </form>

      <div>
        { card ? <Card rua={card.logradouro } bairro={card.bairro} cidade={card.localidade}/> : ''}
      </div>

      <h2>historico</h2>
      { historico ?  historico.map((item) => <Card key={item.cep} rua={item.logradouro} bairro={item.bairro} cidade={item.localidade}/>) : ''}

    </div>
  )
}

export default Form