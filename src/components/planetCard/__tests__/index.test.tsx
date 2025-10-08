import { render, screen } from '../../../test-utils'
import { PlanetCard } from '../index'
import { mockPlanet } from '../../../test-utils'
import userEvent from '@testing-library/user-event'

// Mock Next.js router
const mockPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

describe('PlanetCard Component', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })

  it('renders planet name correctly', () => {
    render(<PlanetCard result={mockPlanet} />)
    
    expect(screen.getByText('Tatooine')).toBeInTheDocument()
  })

  it('renders planet terrain information', () => {
    render(<PlanetCard result={mockPlanet} />)
    
    expect(screen.getByText('desert')).toBeInTheDocument()
  })

  it('renders planet diameter information', () => {
    render(<PlanetCard result={mockPlanet} />)
    
    expect(screen.getByText('10,465 km')).toBeInTheDocument()
  })

  it('renders planet climate information', () => {
    render(<PlanetCard result={mockPlanet} />)
    
    expect(screen.getByText('arid')).toBeInTheDocument()
  })

  it('renders movie information when film details are available', () => {
    render(<PlanetCard result={mockPlanet} />)
    
    expect(screen.getByText('A New Hope')).toBeInTheDocument()
  })

  it('renders "none" for movies when no film details are available', () => {
    const planetWithoutFilms = { ...mockPlanet, filmDetails: [] }
    render(<PlanetCard result={planetWithoutFilms} />)
    
    expect(screen.getByText('none')).toBeInTheDocument()
  })

  it('renders "unknown" for diameter when diameter is unknown', () => {
    const planetWithUnknownDiameter = { ...mockPlanet, diameter: 'unknown' }
    render(<PlanetCard result={planetWithUnknownDiameter} />)
    
    expect(screen.getByText('unknown')).toBeInTheDocument()
  })

  it('navigates to planet detail page when clicked', async () => {
    const user = userEvent.setup()
    render(<PlanetCard result={mockPlanet} />)
    
    const planetCard = screen.getByTestId('planet-card')
    await user.click(planetCard)
    
    expect(mockPush).toHaveBeenCalledWith('/planet/1')
  })

  it('renders all required planet information sections', () => {
    render(<PlanetCard result={mockPlanet} />)
    
    // Check for all the section labels (they appear as "Label: value" format)
    expect(screen.getByText(/Terrain:/)).toBeInTheDocument()
    expect(screen.getByText(/Diameter:/)).toBeInTheDocument()
    expect(screen.getByText(/Climate:/)).toBeInTheDocument()
    expect(screen.getByText(/Movies:/)).toBeInTheDocument()
  })

  it('displays planet icon', () => {
    render(<PlanetCard result={mockPlanet} />)
    
    // Check if the planet icon is rendered (PublicOutlinedIcon)
    const planetIcon = screen.getByTestId('planet-card').querySelector('[data-testid="planet-icon"]')
    expect(planetIcon).toBeInTheDocument()
  })
})
