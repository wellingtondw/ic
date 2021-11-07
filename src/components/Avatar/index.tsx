import { ImgHTMLAttributes } from 'react'
import * as S from './styles'

export type AvatarProps = ImgHTMLAttributes<HTMLImageElement>

export const Avatar = ({ ...rest }: AvatarProps) => (
  <S.Wrapper {...rest} />
)
