import { useSide } from '../../context/side'
import * as S from './styles'

export const Home = () => {
  const { loading, getYourSide } = useSide()

  return (
    <S.Wrapper>
      <S.Title>
        Welcome to <strong>iClinic</strong>
      </S.Title>
      <S.Description>Frontend Challenge</S.Description>
      <S.Button loading={loading} disabled={loading} onClick={getYourSide}>
        Start
      </S.Button>
    </S.Wrapper>
  )
}
