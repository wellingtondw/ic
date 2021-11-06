import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
${({ theme }) => css`
  color: blue;
  background: ${theme.colors.blackBg}
  `}
`
