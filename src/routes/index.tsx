import { Route, Routes as Switch } from 'react-router-dom'

import { Home } from '../pages/Home'
import { SelectedSide } from '../pages/SelectedSide'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/darth-vader" element={<SelectedSide />} />
      <Route path="/luke-skywalker" element={<SelectedSide />} />
    </Switch>
  )
}

export default Routes
