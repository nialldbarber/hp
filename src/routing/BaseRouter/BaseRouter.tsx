import {Route, Routes} from 'react-router-dom'
import {CharacterScreen} from 'src/screens/Character'
import {HomeScreen} from 'src/screens/Home'

const BaseRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route
        path="character/:id"
        element={<CharacterScreen />}
      />
    </Routes>
  )
}

export default BaseRouter
