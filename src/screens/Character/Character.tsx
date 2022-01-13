import {useParams} from 'react-router-dom'
import {Layout} from 'src/components/Layout'

const CharacterScreen = () => {
  let {id} = useParams()
  console.log(id)

  return (
    <Layout>
      <p>CHARACTER SCREEN</p>
    </Layout>
  )
}

export default CharacterScreen
