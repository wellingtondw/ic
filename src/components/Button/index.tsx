import React, {
  ButtonHTMLAttributes
} from 'react'

import { Spinner, SpinnerProps } from '../Spinner'

import * as S from './styles'

export type ButtonTypes =
  | ButtonHTMLAttributes<HTMLButtonElement>

type SpinnerVariantProps = SpinnerProps['variant']

export type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'dark' | 'light'
  loading?: boolean
  spinnerVariant?: SpinnerVariantProps
} & ButtonTypes

const Button = ({
    children,
    variant = 'primary',
    spinnerVariant = 'primary',
    loading = false,
    ...rest
  }: ButtonProps) => (
  <S.Wrapper variant={variant} {...rest}>
    {loading && (
      <Spinner variant={spinnerVariant}/>
    )}

    <S.Content isLoading={loading}>
      {children}
    </S.Content>
  </S.Wrapper>
)

export default Button
