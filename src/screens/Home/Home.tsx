import {Link, useNavigate} from 'react-router-dom'
import {Button} from 'src/components/Button'
import {Error} from 'src/components/Error'
import {Layout} from 'src/components/Layout'
import {Loading} from 'src/components/Loading'
import {TagContainer} from 'src/components/TagContainer'
import {P} from 'src/components/Typography'
import {API} from 'src/constants/api'
import {useLoadData} from 'src/hooks/useLoadData'
import {useStore} from 'src/store'
import type {Characters} from 'src/types/characters'
import {getRandomItemFromArray} from 'src/utils/getRandomItemFromArray'
import {slugify} from 'src/utils/slugify'

const HomeScreen = () => {
  let navigate = useNavigate()
  const {key, value} = useStore()
  const {
    data: characters,
    tagNames,
    loading,
    error,
  } = useLoadData<Characters>(API, key, value)
  let randomCharacter = getRandomItemFromArray(characters)

  if (loading) return <Loading />
  if (error)
    return (
      <Error msg="could not find characters 😐, try again?" />
    )

  return (
    <Layout>
      <Button
        text="Get a random character!"
        onClick={() => {
          navigate(
            `character/${slugify(randomCharacter?.name)}`
          )
        }}
      />
      <div>
        <TagContainer tagNames={tagNames} />
        {characters.map(({name}) => (
          <div key={name}>
            <Link to={`character/${slugify(name)}`}>
              <P text={name} />
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default HomeScreen
