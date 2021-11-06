import {
  createGlobalStyle,
  css,
} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.main.family};
      font-size: ${theme.font.sizes.normal};
    }
  `}
`
