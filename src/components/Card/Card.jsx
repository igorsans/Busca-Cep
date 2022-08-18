import React from 'react'

const Card = ({rua, bairro, cidade}) => {

  return (
    <div>
        <h2>Rua: {rua}</h2>
        <h3>Bairro: {bairro}</h3>
        <h3>Cidade: {cidade}</h3>
    
    </div>
  )
}

export default Card;