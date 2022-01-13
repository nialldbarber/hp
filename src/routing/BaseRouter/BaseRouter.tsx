import {Route, Routes} from 'react-router-dom'
import {CharacterScreen} from 'src/screens/Character'
import {HomeScreen} from 'src/screens/Home'
import {NotFoundScreen} from 'src/screens/NotFound'

const BaseRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route
        path="/character/:id"
        element={<CharacterScreen />}
      />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  )
}

export default BaseRouter
