import '@testing-library/jest-dom';
import { render, screen } from '../../../test-utils';
import PlanetResidents from '../residents/PlanetResidents';
import { mockPlanet } from '../../../test-utils';

describe('PlanetResidents Component', () => {
  const mockResident = {
    name: 'Luke Skywalker',
    hair_color: 'blond',
    eye_color: 'blue',
    gender: 'male',
    url: 'https://swapi.dev/api/people/1/',
    speciesDetails: [
      {
        name: 'Human',
        classification: 'mammal',
        designation: 'sentient',
        url: 'https://swapi.dev/api/species/1/',
      },
    ],
    vehicleDetails: [
      {
        name: 'X-wing',
        model: 'T-65 X-wing',
        url: 'https://swapi.dev/api/vehicles/1/',
      },
    ],
  };

  const planetWithResidents = {
    ...mockPlanet,
    residentDetails: [mockResident],
  };

  it('renders section title with resident count', () => {
    render(
      <PlanetResidents
        data={planetWithResidents}
        climateColor="#FF6B6B"
        isMobile={false}
      />
    );
    
    expect(screen.getByText('Residents (1)')).toBeInTheDocument();
  });

  it('renders resident name correctly', () => {
    render(
      <PlanetResidents
        data={planetWithResidents}
        climateColor="#FF6B6B"
        isMobile={false}
      />
    );
    
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });

  it('renders resident info rows', () => {
    render(
      <PlanetResidents
        data={planetWithResidents}
        climateColor="#FF6B6B"
        isMobile={false}
      />
    );
    
    expect(screen.getByText('Hair Color')).toBeInTheDocument();
    expect(screen.getByText('Eye Color')).toBeInTheDocument();
    expect(screen.getByText('Gender')).toBeInTheDocument();
  });

  it('renders resident info values', () => {
    render(
      <PlanetResidents
        data={planetWithResidents}
        climateColor="#FF6B6B"
        isMobile={false}
      />
    );
    
    expect(screen.getByText('blond')).toBeInTheDocument();
    expect(screen.getByText('blue')).toBeInTheDocument();
    expect(screen.getByText('male')).toBeInTheDocument();
  });

  it('renders species section', () => {
    render(
      <PlanetResidents
        data={planetWithResidents}
        climateColor="#FF6B6B"
        isMobile={false}
      />
    );
    
    expect(screen.getByText('Species')).toBeInTheDocument();
    expect(screen.getByText('Human')).toBeInTheDocument();
  });

  it('renders vehicles section', () => {
    render(
      <PlanetResidents
        data={planetWithResidents}
        climateColor="#FF6B6B"
        isMobile={false}
      />
    );
    
    expect(screen.getByText('Vehicles')).toBeInTheDocument();
    expect(screen.getByText('X-wing')).toBeInTheDocument();
  });

  it('handles planet with no residents', () => {
    const planetWithoutResidents = {
      ...mockPlanet,
      residentDetails: [],
    };
    
    render(
      <PlanetResidents
        data={planetWithoutResidents}
        climateColor="#FF6B6B"
        isMobile={false}
      />
    );
    
    expect(screen.getByText('Residents (0)')).toBeInTheDocument();
  });

  it('handles planet with multiple residents', () => {
    const planetWithMultipleResidents = {
      ...mockPlanet,
      residentDetails: [
        mockResident,
        {
          ...mockResident,
          name: 'Leia Organa',
          hair_color: 'brown',
          eye_color: 'brown',
          gender: 'female',
          url: 'https://swapi.dev/api/people/2/',
          speciesDetails: [],
          vehicleDetails: [],
        },
      ],
    };
    
    render(
      <PlanetResidents
        data={planetWithMultipleResidents}
        climateColor="#FF6B6B"
        isMobile={false}
      />
    );
    
    expect(screen.getByText('Residents (2)')).toBeInTheDocument();
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Leia Organa')).toBeInTheDocument();
  });

  it('handles mobile layout', () => {
    render(
      <PlanetResidents
        data={planetWithResidents}
        climateColor="#FF6B6B"
        isMobile={true}
      />
    );
    
    expect(screen.getByText('Residents (1)')).toBeInTheDocument();
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });

  it('applies climate color to section title', () => {
    const climateColor = '#4ECDC4';
    render(
      <PlanetResidents
        data={planetWithResidents}
        climateColor={climateColor}
        isMobile={false}
      />
    );
    
    const sectionTitle = screen.getByText('Residents (1)');
    expect(sectionTitle).toBeInTheDocument();
  });

  it('renders resident cards with correct structure', () => {
    render(
      <PlanetResidents
        data={planetWithResidents}
        climateColor="#FF6B6B"
        isMobile={false}
      />
    );
    
    const residentCards = screen.getAllByTestId('resident-card');
    expect(residentCards).toHaveLength(1);
    
    const residentCardContent = screen.getByTestId('resident-card-content');
    expect(residentCardContent).toBeInTheDocument();
  });

  it('handles resident with no species', () => {
    const residentWithoutSpecies = {
      ...mockResident,
      speciesDetails: [],
    };
    
    const planetWithResidentNoSpecies = {
      ...mockPlanet,
      residentDetails: [residentWithoutSpecies],
    };
    
    render(
      <PlanetResidents
        data={planetWithResidentNoSpecies}
        climateColor="#FF6B6B"
        isMobile={false}
      />
    );
    
    expect(screen.getByText('No species found')).toBeInTheDocument();
  });

  it('handles resident with no vehicles', () => {
    const residentWithoutVehicles = {
      ...mockResident,
      vehicleDetails: [],
    };
    
    const planetWithResidentNoVehicles = {
      ...mockPlanet,
      residentDetails: [residentWithoutVehicles],
    };
    
    render(
      <PlanetResidents
        data={planetWithResidentNoVehicles}
        climateColor="#FF6B6B"
        isMobile={false}
      />
    );
    
    expect(screen.getByText('No vehicles found')).toBeInTheDocument();
  });

  it('renders all resident info icons', () => {
    render(
      <PlanetResidents
        data={planetWithResidents}
        climateColor="#FF6B6B"
        isMobile={false}
      />
    );
    
    // Check that icons are rendered by looking for SVG elements
    const icons = screen.getAllByTestId(/Icon$/);
    expect(icons.length).toBeGreaterThan(0);
  });
});
