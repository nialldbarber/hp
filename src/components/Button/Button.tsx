import {ReactNode} from 'react'

import {P} from 'src/components/Typography'

type ButtonProps = {
  text?: string
  children?: ReactNode
  onClick?: () => void
}

const Button = ({text, children, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick}>
      {text ? <P text={text} /> : children}
    </button>
  )
}

export default Button
