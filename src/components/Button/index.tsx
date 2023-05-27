import { ButtonProps } from '@src/shared/interfaces/buttonInterface'

function Button(props: ButtonProps) {
  return (
    <button><a href={props.link}>{props.text}</a></button>
  )
}

export default Button;
