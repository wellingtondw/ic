import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import theme from '../../styles/theme'
import { darken } from 'polished'

import {Spinner} from '.'

describe('<Spinner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Spinner />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with primary variant', () => {
    const { container } = renderWithTheme(<Spinner />)

    expect(container.firstChild).toHaveStyle({
      'border-top': `1px solid ${theme.colors.white}`,
      'border-right': `1px solid ${theme.colors.white}`,
      'border-bottom': `1px solid ${theme.colors.white}`,
      'border-left': `2px solid ${theme.colors.primary}`
    })
  })

  it('should render with secondary variant', () => {
    const { container } = renderWithTheme(<Spinner variant='secondary' />)

    expect(container.firstChild).toHaveStyle({
      'border-top': `1px solid ${theme.colors.primary}`,
      'border-right': `1px solid ${theme.colors.primary}`,
      'border-bottom': `1px solid ${theme.colors.primary}`,
      'border-left': `2px solid ${darken(0.2, theme.colors.primary)}`
    })
  })


})
