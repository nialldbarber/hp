import {Error} from 'src/components/Error'
import {Loading} from 'src/components/Loading'
import {H} from 'src/components/Typography'
import {API} from 'src/constants/api'
import {useLoadData} from 'src/hooks/useLoadData'

const HomeScreen = () => {
  const {
    data: characters,
    loading,
    error,
  } = useLoadData(API)

  if (loading) return <Loading />
  if (error)
    return (
      <Error msg="could not find characters 😐, try again?" />
    )

  console.log(characters)

  return (
    <div>
      <H text="HP Characters" level={1} />
    </div>
  )
}

export default HomeScreen
