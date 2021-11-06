import { screen, waitFor } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import theme from '../../styles/theme'

import {Button} from '.'

describe('<Button />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Button>choose your path again, Padawan</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with primary variant', () => {
    renderWithTheme(<Button>choose your path again, Padawan</Button>)

    const buttonEl = screen.getByRole('button', { name: /choose your path again, Padawan/i })

    expect(buttonEl).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white,
      visibility: 'visible',
    })
  })

  it('should render with dark variant', () => {
    renderWithTheme(<Button variant="dark">choose your path again, Padawan</Button>)

    const buttonEl = screen.getByRole('button', { name: /choose your path again, Padawan/i })

    expect(buttonEl).toHaveStyle({
      background: theme.colors.black,
      color: theme.colors.yellow,
      visibility: 'visible',
    })
  })

  it('should render with light variant', () => {
    renderWithTheme(<Button variant="light">choose your path again, Padawan</Button>)

    const buttonEl = screen.getByRole('button', { name: /choose your path again, Padawan/i })

    expect(buttonEl).toHaveStyle({
      background: theme.colors.white,
      color: theme.colors.black,
      visibility: 'visible',
    })
  })

  it('should render a disabled Button', () => {
    renderWithTheme(<Button disabled>choose your path again, Padawan</Button>)

    const buttonEl = screen.getByRole('button', { name: /choose your path again, Padawan/i })

    expect(buttonEl).toHaveStyle({
      opacity: 0.5,
      cursor: 'not-allowed',
      visibility: 'visible',
    })
  })

  it('should render Button with loading', () => {
    renderWithTheme(<Button loading>choose your path again, Padawan</Button>)

    const contentEl = screen.getByText(/choose your path again, Padawan/i)
    const spinnerEl = screen.getByLabelText(/loading/i)

    expect(spinnerEl).toBeInTheDocument()
    expect(spinnerEl).toHaveStyle({
      position: 'absolute',
    })
    expect(contentEl).toHaveStyle({
      visibility: 'hidden',
    })
  })
})
