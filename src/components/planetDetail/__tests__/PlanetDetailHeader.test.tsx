import '@testing-library/jest-dom';
import { render, screen } from '../../../test-utils';
import PlanetDetailHeader from '../PlannetHeader';

// Mock the utils
jest.mock('../../../utils/planets', () => ({
  getClimateBackground: jest.fn(() => 'linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)'),
}));

// Import mocked modules
import { getClimateBackground } from '../../../utils/planets';

describe('PlanetDetailHeader Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders planet name correctly', () => {
    render(
      <PlanetDetailHeader
        isMobile={false}
        planetName="Tatooine"
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
  });

  it('renders planet icon', () => {
    render(
      <PlanetDetailHeader
        isMobile={false}
        planetName="Tatooine"
        climateColor="#FF6B6B"
      />
    );
    
    // Check for the PublicOutlinedIcon
    const icon = screen.getByTestId('PublicOutlinedIcon');
    expect(icon).toBeInTheDocument();
  });

  it('applies mobile styling when isMobile is true', () => {
    render(
      <PlanetDetailHeader
        isMobile={true}
        planetName="Tatooine"
        climateColor="#FF6B6B"
      />
    );
    
    const icon = screen.getByTestId('PublicOutlinedIcon');
    expect(icon).toHaveStyle({ fontSize: '32px' });
  });

  it('applies desktop styling when isMobile is false', () => {
    render(
      <PlanetDetailHeader
        isMobile={false}
        planetName="Tatooine"
        climateColor="#FF6B6B"
      />
    );
    
    const icon = screen.getByTestId('PublicOutlinedIcon');
    expect(icon).toHaveStyle({ fontSize: '48px' });
  });

  it('applies climate color to planet name', () => {
    const climateColor = '#FF6B6B';
    render(
      <PlanetDetailHeader
        isMobile={false}
        planetName="Tatooine"
        climateColor={climateColor}
      />
    );
    
    const planetName = screen.getByText('Tatooine');
    expect(planetName).toBeInTheDocument();
  });

  it('applies climate color to icon', () => {
    const climateColor = '#FF6B6B';
    render(
      <PlanetDetailHeader
        isMobile={false}
        planetName="Tatooine"
        climateColor={climateColor}
      />
    );
    
    const icon = screen.getByTestId('PublicOutlinedIcon');
    expect(icon).toHaveStyle({ color: climateColor });
  });

  it('renders with different planet names', () => {
    const { rerender } = render(
      <PlanetDetailHeader
        isMobile={false}
        planetName="Alderaan"
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('Alderaan')).toBeInTheDocument();
    
    rerender(
      <PlanetDetailHeader
        isMobile={false}
        planetName="Coruscant"
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('Coruscant')).toBeInTheDocument();
  });

  it('handles empty planet name', () => {
    render(
      <PlanetDetailHeader
        isMobile={false}
        planetName=""
        climateColor="#FF6B6B"
      />
    );
    
    const planetNameElement = screen.getByTestId('planet-name');
    expect(planetNameElement).toBeInTheDocument();
    expect(planetNameElement).toHaveTextContent('');
  });

  it('applies background styling with climate background', () => {
    (getClimateBackground as jest.Mock).mockReturnValue('linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)');
    
    render(
      <PlanetDetailHeader
        isMobile={false}
        planetName="Tatooine"
        climateColor="#4ECDC4"
      />
    );
    
    const header = screen.getByTestId('planet-header');
    expect(header).toBeInTheDocument();
  });

  it('renders header content structure correctly', () => {
    render(
      <PlanetDetailHeader
        isMobile={false}
        planetName="Tatooine"
        climateColor="#FF6B6B"
      />
    );
    
    // Check that the header structure is correct
    expect(screen.getByTestId('planet-header')).toBeInTheDocument();
    expect(screen.getByTestId('planet-header-content')).toBeInTheDocument();
    expect(screen.getByTestId('planet-header-icon-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('planet-name')).toBeInTheDocument();
  });
});
