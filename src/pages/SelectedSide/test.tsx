import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import theme from '../../styles/theme'

import { SelectedSide } from '.'
import { fireEvent } from '@testing-library/dom'

const mockGetYourSide = jest.fn()

jest.mock('../../assets/images/darth-vader.png', () => 'darth')
jest.mock('../../assets/images/luke-skywalker.png', () => 'luke')

jest.mock('../../components/Header', () => {
  return {
    Header: () => <div data-testid="Mock Header"></div>
  }
})

let mockPath = '/darth-vader'

jest.mock('react-router-dom', () => {
  return {
    useLocation: () => ({
      pathname: mockPath
    }),
    useNavigate: () => jest.fn()
  }
})

jest.mock('../../context/side', () => {
  return {
    useSide: () => ({
      getYourSide: mockGetYourSide,
      loading: false
    })
  }
})

describe('<SelectedSide />', () => {
  it('should be able to render correctly', () => {
    const { container } = renderWithTheme(<SelectedSide />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be able to choose a side', () => {
    renderWithTheme(<SelectedSide />)

    const buttonEl = screen.getByRole('button', {
      name: /choose your path again, Padawan/i
    })

    fireEvent.click(buttonEl)

    expect(mockGetYourSide).toHaveBeenCalledTimes(1)
  })

  it('should be able to render with darth vader selected', () => {
    const { container } = renderWithTheme(<SelectedSide />)

    const buttonEl = screen.getByRole('button', {
      name: /choose your path again, Padawan/i
    })
    const imgEl = screen.getByRole('img')
    const masterEl = screen.getByText(/darth vader/i)

    expect(masterEl).toBeInTheDocument()

    expect(container.firstChild).toHaveStyle({
      background: theme.colors.blackBg,
      color: theme.colors.white
    })
    expect(buttonEl).toHaveStyle({
      background: theme.colors.white,
      color: theme.colors.black
    })
    expect(imgEl).toHaveAttribute('src', 'darth')
  })

  it('should be able to render with luke skywalker selected', () => {
    mockPath = 'luke-skywalker'
    const { container } = renderWithTheme(<SelectedSide />)

    const buttonEl = screen.getByRole('button', {
      name: /choose your path again, Padawan/i
    })
    const imgEl = screen.getByRole('img')
    const masterEl = screen.getByText(/luke skywalker/i)

    expect(masterEl).toBeInTheDocument()

    expect(container.firstChild).toHaveStyle({
      background: theme.colors.yellow,
      color: theme.colors.black
    })
    expect(buttonEl).toHaveStyle({
      background: theme.colors.black,
      color: theme.colors.yellow
    })
    expect(imgEl).toHaveAttribute('src', 'luke')
  })
})
