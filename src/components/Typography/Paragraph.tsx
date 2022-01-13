type ParagraphProps = {
  text: string
  inline?: boolean
}

const P = ({text, inline = false}: ParagraphProps) => {
  return inline ? <span>{text}</span> : <p>{text}</p>
}

export default P
