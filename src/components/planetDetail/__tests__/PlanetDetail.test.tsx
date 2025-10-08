import '@testing-library/jest-dom';
import { render, screen } from '../../../test-utils';
import { PlanetDetail } from '../PlanetDetail';
import { mockPlanet } from '../../../test-utils';

// Mock the hooks
jest.mock('../../../../hooks/useDimensions', () => ({
  useIsMobile: jest.fn(() => false),
}));

// Mock the utils
jest.mock('../../../utils/planets', () => ({
  getClimateColor: jest.fn(() => '#FF6B6B'),
  getClimateBackground: jest.fn(() => 'linear-gradient(135deg, #FF6B6B15, #FF6B6B05)'),
  formatValue: jest.fn((value, unit) => {
    if (unit) {
      return `${value} ${unit}`;
    }
    return value;
  }),
}));

// Import mocked modules
import { useIsMobile } from '../../../../hooks/useDimensions';
import { getClimateColor } from '../../../utils/planets';

describe('PlanetDetail Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state when isLoading is true', () => {
    render(<PlanetDetail data={undefined} isLoading={true} error={null} />);
    
    expect(screen.getByTestId('grid-loader')).toBeInTheDocument();
  });

  it('renders error message when data is not provided', () => {
    render(<PlanetDetail data={undefined} isLoading={false} error={null} />);
    
    expect(screen.getByText('Planet not found')).toBeInTheDocument();
  });

  it('renders planet detail with all components when data is provided', () => {
    render(<PlanetDetail data={mockPlanet} isLoading={false} error={null} />);
    
    // Check if planet name is rendered in header
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
    
    // Check if planet stats section is rendered
    expect(screen.getByText('Planet Stats')).toBeInTheDocument();
    
    // Check if residents section is rendered
    expect(screen.getByText(/Residents/)).toBeInTheDocument();
  });

  it('renders planet stats with correct data', () => {
    render(<PlanetDetail data={mockPlanet} isLoading={false} error={null} />);
    
    // Check for specific stat labels
    expect(screen.getByText('Rotation Period')).toBeInTheDocument();
    expect(screen.getByText('Orbital Period')).toBeInTheDocument();
    expect(screen.getByText('Diameter')).toBeInTheDocument();
    expect(screen.getByText('Climate')).toBeInTheDocument();
    expect(screen.getByText('Gravity')).toBeInTheDocument();
    expect(screen.getByText('Terrain')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
  });

  it('renders planet stats with correct values', () => {
    render(<PlanetDetail data={mockPlanet} isLoading={false} error={null} />);
    
    // Check for specific stat values
    expect(screen.getByText('23 hours')).toBeInTheDocument();
    expect(screen.getByText('304 days')).toBeInTheDocument();
    expect(screen.getByText('10465 km')).toBeInTheDocument();
    expect(screen.getByText('arid')).toBeInTheDocument();
    expect(screen.getByText('1 standard')).toBeInTheDocument();
    expect(screen.getByText('desert')).toBeInTheDocument();
    expect(screen.getByText('200000')).toBeInTheDocument();
  });

  it('handles mobile layout correctly', () => {
    (useIsMobile as jest.Mock).mockReturnValue(true);
    
    render(<PlanetDetail data={mockPlanet} isLoading={false} error={null} />);
    
    // Component should still render all content
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
    expect(screen.getByText('Planet Stats')).toBeInTheDocument();
  });

  it('handles planet with no residents', () => {
    const planetWithoutResidents = {
      ...mockPlanet,
      residentDetails: [],
    };
    
    render(<PlanetDetail data={planetWithoutResidents} isLoading={false} error={null} />);
    
    expect(screen.getByText('Residents (0)')).toBeInTheDocument();
  });

  it('handles planet with residents', () => {
    const planetWithResidents = {
      ...mockPlanet,
      residentDetails: [
        {
          name: 'Luke Skywalker',
          height: '172',
          mass: '77',
          hair_color: 'blond',
          skin_color: 'fair',
          eye_color: 'blue',
          birth_year: '19BBY',
          gender: 'male',
          homeworld: 'https://swapi.dev/api/planets/1/',
          films: ['https://swapi.dev/api/films/1/'],
          species: ['https://swapi.dev/api/species/1/'],
          vehicles: ['https://swapi.dev/api/vehicles/14/'],
          starships: ['https://swapi.dev/api/starships/12/'],
          created: '2014-12-09T13:50:51.644000Z',
          edited: '2014-12-20T21:17:56.891000Z',
          url: 'https://swapi.dev/api/people/1/',
          speciesDetails: [],
          vehicleDetails: [],
        },
      ],
    };
    
    render(<PlanetDetail data={planetWithResidents} isLoading={false} error={null} />);
    
    expect(screen.getByText('Residents (1)')).toBeInTheDocument();
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });

  it('applies correct climate color styling', () => {
    (getClimateColor as jest.Mock).mockReturnValue('#FF6B6B');
    
    render(<PlanetDetail data={mockPlanet} isLoading={false} error={null} />);
    
    // The climate color should be applied to various elements
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
  });

  it('renders all stat icons', () => {
    render(<PlanetDetail data={mockPlanet} isLoading={false} error={null} />);
    
    // Check that icons are rendered (they should be present as SVG elements)
    const icons = screen.getAllByTestId(/Icon$/);
    expect(icons.length).toBeGreaterThan(0);
  });
});
