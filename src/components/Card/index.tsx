import { CardProps } from '@src/shared/interfaces/cardsinterface';
import React from 'react'

const Card = (props: CardProps) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
      <p>{props.underBody}</p>
    </div>
  )
}

export default Card;
