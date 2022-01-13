import {Link} from 'react-router-dom'
import {H} from 'src/components/Typography'

const Header = () => {
  return (
    <Link to="/">
      <H text="HP Characters" level={1} />
    </Link>
  )
}

export default Header
