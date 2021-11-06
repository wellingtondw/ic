import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished';
import { Spinner } from '../Spinner/styles'

import { ButtonProps } from '.'

type WrapperProps =  Pick<ButtonProps, 'variant'>

const wrapperModifiers = {
  primary:  (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};

    &:hover:not(:disabled) {
      background: ${darken(0.03, theme.colors.primary)};
    }
  `,
  dark: (theme: DefaultTheme) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.yellow};

    &:hover:not(:disabled) {
      background: ${darken(0.03, theme.colors.black)};
    }
  `,
  light: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};

    &:hover:not(:disabled) {
      background: ${darken(0.03, theme.colors.white)};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    font-weight: bold;
    border: 0;
    border-radius: ${theme.border.radius};
    position: relative;
    transition: background-color ${theme.transition.fast};

    ${Spinner} {
      position: absolute;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    ${!!variant && wrapperModifiers[variant](theme)}
`}
`
type ContentProps = {
  isLoading?: boolean
}

export const Content = styled.div<ContentProps>`
  ${({ isLoading }) => css`
    visibility: ${isLoading ? 'hidden' : 'visible'};
  `}
`

