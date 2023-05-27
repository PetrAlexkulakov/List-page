import { ButtonProps } from '@src/shared/interfaces/buttonInterface'

const Button = (props: ButtonProps) => {
  return (
    <button className="bg-blue-500 text-white w-40 h-10 rounded-md flex items-center justify-center">
      <a href={props.link}>{props.text}</a>
    </button>
  )
}

export default Button;
