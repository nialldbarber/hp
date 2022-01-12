const numberTuple = <T extends number[]>(...args: T) => args
const HEADER_LIST = numberTuple(1, 2, 3, 4, 5, 6)

type HeadingProps = {
  text: string
  level: typeof HEADER_LIST[number]
}

const Heading = ({text, level, ...rest}: HeadingProps) => {
  const H = `h${level}` as keyof JSX.IntrinsicElements
  return <H {...rest}>{text}</H>
}

export default Heading
