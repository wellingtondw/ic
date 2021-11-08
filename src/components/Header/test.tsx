import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Header } from '.'
import theme from '../../styles/theme'

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockedNavigate
  }
})

describe('<Header />', () => {
  it('should be able to render correctly', () => {
    const { container } = renderWithTheme(<Header />)

    expect(container.firstChild).toHaveStyleRule(
      'padding',
      `0 ${theme.spacings.medium}`,
      {
        media: '(min-width: 480px)'
      }
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be able to back in history', () => {
    renderWithTheme(<Header />)

    const buttonEl = screen.getByRole('button', { name: /back/i })

    fireEvent.click(buttonEl)

    expect(mockedNavigate).toHaveBeenCalledTimes(1)
    expect(mockedNavigate).toHaveBeenCalledWith(-1)
  })
})
