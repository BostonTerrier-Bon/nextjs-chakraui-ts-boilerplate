import { render, screen } from '@/utils/test-utils'
import '@testing-library/jest-dom'

import Container from '.'

describe('<Container/ >', () => {
  it('should render with children', () => {
    render(
      <Container>
        <div data-testid="Mock Children" />
      </Container>
    )
    // screen.debug()
    expect(screen.getByTestId('Mock Children')).toBeInTheDocument()
  })
})
