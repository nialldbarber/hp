import {Error} from 'src/components/Error'
import {Layout} from 'src/components/Layout'
import {Loading} from 'src/components/Loading'
import {TagContainer} from 'src/components/TagContainer'
import {H, P} from 'src/components/Typography'
import {API} from 'src/constants/api'
import {useLoadData} from 'src/hooks/useLoadData'
import {useStore} from 'src/store'
import type {Characters} from 'src/types/characters'

const HomeScreen = () => {
  const {key, value} = useStore()
  const {
    data: characters,
    tagNames,
    loading,
    error,
  } = useLoadData<Characters>(API, key, value)

  if (loading) return <Loading />
  if (error)
    return (
      <Error msg="could not find characters 😐, try again?" />
    )

  // console.log(characters)

  return (
    <Layout>
      <H text="HP Characters" level={1} />
      <div>
        <TagContainer tagNames={tagNames} />
        {characters.map(({name}) => (
          <div key={name}>
            <P text={name} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default HomeScreen
