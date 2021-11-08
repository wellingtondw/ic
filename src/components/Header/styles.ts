import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    height: ${theme.spacings.xxxlarge};
    padding: 0 ${theme.spacings.xsmall};

    @media (min-width: 480px) {
      padding: 0 ${theme.spacings.medium};
    }
  `}
`
