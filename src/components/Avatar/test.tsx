import { renderWithTheme } from '../../utils/tests/helpers'

import { Avatar } from '.'

describe('<Avatar />', () => {
  it('should be able to render correctly', () => {
    const { container } = renderWithTheme(<Avatar />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
