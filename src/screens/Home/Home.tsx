import {Error} from 'src/components/Error'
import {Loading} from 'src/components/Loading'
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
      <p>HOME SCREEN</p>
    </div>
  )
}

export default HomeScreen
