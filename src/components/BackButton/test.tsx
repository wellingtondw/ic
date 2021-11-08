import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import theme from '../../styles/theme'

import { BackButton } from '.'

describe('<BackButton />', () => {
  it('should be able to render correctly', () => {
    const { container } = renderWithTheme(<BackButton />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be able to render with dark variant', () => {
    renderWithTheme(<BackButton variant="dark" />)

    const buttonEl = screen.getByRole('button', { name: /back/i })

    expect(buttonEl).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should be able to render with light variant', () => {
    renderWithTheme(<BackButton variant="light" />)

    const buttonEl = screen.getByRole('button', { name: /back/i })

    expect(buttonEl).toHaveStyle({
      color: theme.colors.white
    })
  })
})
