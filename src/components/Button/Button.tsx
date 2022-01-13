import {ReactNode} from 'react'

import {P} from 'src/components/Typography'
import {buttonStyles} from 'src/components/Button/Button.css'

type ButtonProps = {
  text?: string
  children?: ReactNode
  onClick?: () => void
}

const Button = ({text, children, onClick}: ButtonProps) => {
  return (
    <button className={buttonStyles} onClick={onClick}>
      {text ? <P text={text} /> : children}
    </button>
  )
}

export default Button
