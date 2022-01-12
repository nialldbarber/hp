type ErrorProps = {
  msg?: string
}

const Error = ({msg}: ErrorProps) => {
  return (
    <>
      <p>Uh oh!</p>
      {msg && <p>{msg}</p>}
    </>
  )
}

export default Error
