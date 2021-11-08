import styled, { css, DefaultTheme, keyframes } from 'styled-components'
import { darken } from 'polished'
import { SpinnerProps } from '.'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const spinnerModifiers = {
  primary: (theme: DefaultTheme) => css`
    border-top: 1px solid ${theme.colors.white};
    border-right: 1px solid ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.white};
    border-left: 2px solid ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    border-top: 1px solid ${theme.colors.primary};
    border-right: 1px solid ${theme.colors.primary};
    border-bottom: 1px solid ${theme.colors.primary};
    border-left: 2px solid ${darken(0.2, theme.colors.primary)};
  `
}

export const Spinner = styled.div<SpinnerProps>`
  ${({ theme, variant }) => css`
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    background: transparent;
    width: ${theme.font.sizes.medium};
    height: ${theme.font.sizes.medium};
    border-radius: 50%;

    ${!!variant && spinnerModifiers[variant](theme)}
  `}
`
