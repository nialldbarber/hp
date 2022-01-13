import {useParams} from 'react-router-dom'
import {Error} from 'src/components/Error'
import {Layout} from 'src/components/Layout'
import {Loading} from 'src/components/Loading'
import {P} from 'src/components/Typography'
import {API} from 'src/constants/api'
import {useLoadData} from 'src/hooks/useLoadData'
import {Characters} from 'src/types/characters'
import {slugify} from 'src/utils/slugify'

const CharacterScreen = () => {
  let {id} = useParams()
  console.log(slugify(id, true))
  let slug = slugify(id, true)

  const {
    data: character,
    loading,
    error,
  } = useLoadData<Characters>(API, 'name', slug)

  if (loading) return <Loading />
  if (error)
    return (
      <Error msg="could not find characters 😐, try again?" />
    )

  console.log(character)

  return (
    <Layout>
      {character.map(({name}) => (
        <div key={name}>
          <P text={name} />
        </div>
      ))}
    </Layout>
  )
}

export default CharacterScreen
