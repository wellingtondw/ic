import * as S from './styles'

export type SpinnerProps = {
  variant?: 'primary' | 'secondary'
}

export const Spinner = ({ variant = 'primary', ...rest }: SpinnerProps) => {
  return <S.Spinner variant={variant} {...rest} />
}
