import * as S from './styles'

export type SpinnerProps = {
  variant?: 'primary' | 'secondary'
}

export const Spinner = ({ variant = 'primary' }: SpinnerProps) => {
  return <S.Spinner variant={variant} />
}
