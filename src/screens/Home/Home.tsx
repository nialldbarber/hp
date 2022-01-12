import {useLoadData} from 'src/hooks/useLoadData'
import {Error} from 'src/components/Error'
import {Layout} from 'src/components/Layout'
import {Loading} from 'src/components/Loading'
import {H, P} from 'src/components/Typography'
import {API} from 'src/constants/api'
import {formatTagNames} from 'src/utils/getTagNames'

const HomeScreen = () => {
  const {
    data: characters,
    tagNames,
    loading,
    error,
  } = useLoadData(API)

  if (loading) return <Loading />
  if (error)
    return (
      <Error msg="could not find characters 😐, try again?" />
    )

  // list of filter tags
  // character list

  return (
    <Layout>
      <H text="HP Characters" level={1} />
      <div>
        <div style={{color: 'red'}}>
          {tagNames.map((tags) => (
            <p>{formatTagNames(tags)}</p>
          ))}
        </div>
        {characters.map(({name, image}) => (
          <div key={name}>
            <P text={name} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default HomeScreen
