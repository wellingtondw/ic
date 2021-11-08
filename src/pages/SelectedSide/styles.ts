import styled, { css } from 'styled-components'
import * as Avatar from '../../components/Avatar/styles'
import * as Button from '../../components/Button/styles'

type WrapperProps = {
  isDarthSide: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isDarthSide }) => css`
    width: 100%;
    min-height: 100vh;
    background: ${isDarthSide ? theme.colors.blackBg : theme.colors.yellow};
    color: ${isDarthSide ? theme.colors.white : theme.colors.black};
  `}
`

export const Main = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: calc(100vh - ${theme.spacings.xxxlarge});
    padding: 0 ${theme.spacings.large} ${theme.spacings.small};

    ${Avatar.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${Button.Wrapper} {
      margin-top: ${theme.spacings.medium};
    }

    @media (min-width: 768px) {
      justify-content: flex-start;
      height: auto;

      ${Avatar.Wrapper} {
        margin-bottom: ${theme.spacings.xsmall};
        order: 2;
      }

      ${Button.Wrapper} {
        order: 1;
        margin-top: 100px;
        margin-bottom: ${theme.spacings.xxxlarge};
      }
    }
  `}
`

export const MasterTitle = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: 44px;
    font-weight: 400;

    strong {
      display: block;
    }

    @media (min-width: 768px) {
      order: 3;
    }
  `}
`
