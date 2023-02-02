import { render, screen } from '@/utils/test-utils'
import '@testing-library/jest-dom'

import Fuga from '.'

describe('<Fuga />', () => {
  it('should render the heading', () => {
    render(<Fuga />)

    expect(screen.getByRole('heading', { name: /Fuga/i })).toBeInTheDocument()
  })
})
