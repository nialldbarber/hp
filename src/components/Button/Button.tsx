import {ReactNode} from 'react'

import {P} from 'src/components/Typography'

type ButtonProps = {
  text?: string
  children?: ReactNode
}

const Button = ({text, children}: ButtonProps) => {
  return (
    <button>{text ? <P text={text} /> : children}</button>
  )
}

export default Button
