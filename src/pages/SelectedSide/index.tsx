// import darthVaderImg from '../../assets/images/darth-vader.png'
import lukeSkywalkerImg from '../../assets/images/luke-skywalker.png'

import { Avatar } from '../../components/Avatar'
import { Header } from '../../components/Header'

export const SelectedSide = () => {
  return (
    <>
      <Header />
      <Avatar src={lukeSkywalkerImg} />
    </>
  )
}
