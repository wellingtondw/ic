import { renderWithTheme } from '../../utils/tests/helpers'

import {Avatar} from '.'

describe('<Avatar />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Avatar />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
