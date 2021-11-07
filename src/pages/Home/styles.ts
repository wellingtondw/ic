import styled, { css } from 'styled-components'
import { Button as SButton } from "../../components/Button"

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 ${theme.spacings.xlarge};

    @media (min-width: 768px) {
      padding-top: 210px;
      min-height: auto;
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.primary};
    font-weight: 400;
    margin-bottom: ${theme.spacings.xxsmall};

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.primary};
    margin-bottom: 162px;
    letter-spacing: 0.35rem;
    line-height: 18px;
  `}
`

export const Button = styled(SButton)`
  text-transform: uppercase;
  letter-spacing: 0.35rem;
`
