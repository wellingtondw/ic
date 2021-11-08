import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'

import { Home } from '.'
import { fireEvent } from '@testing-library/dom'

const mockGetYourSide = jest.fn()

jest.mock('../../context/side', () => {
  return {
    useSide: () => ({
      getYourSide: mockGetYourSide,
      loading: false
    })
  }
})

describe('<Home />', () => {
  it('should be able to render correctly', () => {
    const { container } = renderWithTheme(<Home />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be able to choose a side', () => {
    renderWithTheme(<Home />)

    const buttonEl = screen.getByRole('button', { name: /start/i })

    fireEvent.click(buttonEl)

    expect(mockGetYourSide).toHaveBeenCalledTimes(1)
  })
})
