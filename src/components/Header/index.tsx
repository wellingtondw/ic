import { useNavigate } from 'react-router-dom'

import { BackButton, BackButtonProps } from '../BackButton'

import * as S from './styles'

export type HeaderProps = {
  backButtonVariant?: BackButtonProps['variant']
}

export const Header = ({ backButtonVariant, ...rest }: HeaderProps) => {
  const navigate = useNavigate()

  return (
    <S.Wrapper {...rest}>
      <BackButton variant={backButtonVariant} onClick={() => navigate(-1)} />
    </S.Wrapper>
  )
}
