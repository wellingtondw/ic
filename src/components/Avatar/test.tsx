import { renderWithTheme } from '../../utils/tests/helpers'

import { Avatar } from '.'

describe('<Avatar />', () => {
  it('should be able to render correctly', () => {
    const { container } = renderWithTheme(<Avatar />)

    expect(container.firstChild).toHaveStyleRule('max-width', '18.875rem', {
      media: '(min-width: 480px)'
    })

    expect(container.firstChild).toHaveStyleRule('max-width', '23.75rem', {
      media: '(min-width: 768px)'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
