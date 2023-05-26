import { CardProps } from '@src/shared/interfaces/cardsinterface';
import React from 'react'
import Button from '../Button';

const Card = (props: CardProps) => {
  return (
    <div>
      <h1 className="underline">{props.title}</h1>
      <p>{props.body}</p>
      <Button text='See all' link={props.link} />
      <p>{props.underBody}</p>
    </div>
  )
}

export default Card;
