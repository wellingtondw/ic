import { ButtonHTMLAttributes } from 'react'
import { ArrowLeftShort } from '@styled-icons/bootstrap'

import * as S from './styles'

export type BackButtonProps = {
  variant?: 'dark' | 'light'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const BackButton = ({ variant = 'dark', ...rest }: BackButtonProps) => (
  <S.Wrapper variant={variant} {...rest}>
    <ArrowLeftShort />
    back
  </S.Wrapper>
)
