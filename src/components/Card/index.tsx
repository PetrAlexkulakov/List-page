import { CardProps } from '@src/shared/interfaces/cardsinterface';
import React from 'react'
import Button from '../Button';

const Card = (props: CardProps) => {
  return (
    <div className={'border-2 border-black ' + props.className}>
      <h1 className='m-4'>{props.title}</h1>
      <p className='m-4'>{props.body}</p>
      <div className="flex justify-end m-4">
        <Button text='See all' link={props.link} />
      </div>
      {props.underBody && (
      <div className="flex justify-center border-t border-black">
        <p className='m-4'>{props.underBody}</p>
      </div>
      )}
    </div>
  )
}

export default Card;
