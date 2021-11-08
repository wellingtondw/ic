import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { BackButtonProps } from '.'

type WrapperProps = Pick<BackButtonProps, 'variant'>

const wrapperModifiers = {
  dark: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};

    &:hover:not(:disabled) {
      color: ${darken(0.03, theme.colors.black)};
    }
  `,
  light: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};

    &:hover:not(:disabled) {
      color: ${darken(0.03, theme.colors.white)};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, variant }) => css`
    height: ${theme.spacings.xlarge};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    border: 0;
    background: transparent;
    transition: color ${theme.transition.fast};

    > svg {
      width: 32px;
      height: 32px;
      margin-right: ${theme.spacings.xxxsmall};
    }

    ${!!variant && wrapperModifiers[variant](theme)}
  `}
`
