import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import theme from '../../styles/theme'

import {Spinner} from '.'

describe('<Spinner />', () => {
  it.skip('should render correctly', () => {
    const { container } = renderWithTheme(<Spinner />)

    // expect(container.firstChild).toMatchSnapshot()
  })

})
