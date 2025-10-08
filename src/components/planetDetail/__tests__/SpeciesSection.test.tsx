import '@testing-library/jest-dom';
import { render, screen } from '../../../test-utils';
import SpeciesSection from '../residents/SpeciesSection';

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
    {
      name: 'Wookie',
      classification: 'mammal',
      designation: 'sentient',
      url: 'https://swapi.dev/api/species/2/',
    },
  ],
  vehicleDetails: [],
};

describe('SpeciesSection Component', () => {
  it('renders section title with icon', () => {
    render(
      <SpeciesSection
        resident={mockResident}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('Species')).toBeInTheDocument();
    const icon = screen.getByTestId('CategoryOutlinedIcon');
    expect(icon).toBeInTheDocument();
  });

  it('renders species names correctly', () => {
    render(
      <SpeciesSection
        resident={mockResident}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('Human')).toBeInTheDocument();
    expect(screen.getByText('Wookie')).toBeInTheDocument();
  });

  it('renders species details correctly', () => {
    render(
      <SpeciesSection
        resident={mockResident}
        climateColor="#FF6B6B"
      />
    );
    
    // Should render details for both species (use getAllByText for multiple matches)
    const detailsElements = screen.getAllByText(/mammal • sentient/);
    expect(detailsElements).toHaveLength(2);
  });

  it('renders multiple species correctly', () => {
    render(
      <SpeciesSection
        resident={mockResident}
        climateColor="#FF6B6B"
      />
    );
    
    // Should render both species
    expect(screen.getByText('Human')).toBeInTheDocument();
    expect(screen.getByText('Wookie')).toBeInTheDocument();
    
    // Should render details for both species
    const detailsElements = screen.getAllByText(/mammal • sentient/);
    expect(detailsElements).toHaveLength(2);
  });

  it('handles resident with no species', () => {
    const residentWithoutSpecies = {
      ...mockResident,
      speciesDetails: [],
    };
    
    render(
      <SpeciesSection
        resident={residentWithoutSpecies}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('No species found')).toBeInTheDocument();
  });

  it('handles resident with undefined species', () => {
    const residentWithUndefinedSpecies = {
      ...mockResident,
      speciesDetails: undefined,
    };
    
    render(
      <SpeciesSection
        resident={residentWithUndefinedSpecies}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('No species found')).toBeInTheDocument();
  });

  it('applies climate color to section title', () => {
    const climateColor = '#4ECDC4';
    render(
      <SpeciesSection
        resident={mockResident}
        climateColor={climateColor}
      />
    );
    
    const sectionTitle = screen.getByText('Species');
    expect(sectionTitle).toBeInTheDocument();
  });

  it('applies climate color to species items', () => {
    const climateColor = '#4ECDC4';
    render(
      <SpeciesSection
        resident={mockResident}
        climateColor={climateColor}
      />
    );
    
    expect(screen.getByText('Human')).toBeInTheDocument();
    expect(screen.getByText('Wookie')).toBeInTheDocument();
  });

  it('renders species list with correct structure', () => {
    render(
      <SpeciesSection
        resident={mockResident}
        climateColor="#FF6B6B"
      />
    );
    
    const additionalInfoList = screen.getByTestId('additional-info-list');
    expect(additionalInfoList).toBeInTheDocument();
    
    const additionalInfoItems = screen.getAllByTestId('additional-info-item');
    expect(additionalInfoItems).toHaveLength(2);
  });

  it('handles species with missing classification', () => {
    const residentWithIncompleteSpecies = {
      ...mockResident,
      speciesDetails: [
        {
          name: 'Human',
          classification: undefined,
          designation: 'sentient',
          url: 'https://swapi.dev/api/species/1/',
        },
      ],
    };
    
    render(
      <SpeciesSection
        resident={residentWithIncompleteSpecies}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('Human')).toBeInTheDocument();
    // Classification should be empty when undefined - check for the bullet and sentient
    expect(screen.getByText(/• sentient/)).toBeInTheDocument();
  });

  it('handles species with missing designation', () => {
    const residentWithIncompleteSpecies = {
      ...mockResident,
      speciesDetails: [
        {
          name: 'Human',
          classification: 'mammal',
          designation: undefined,
          url: 'https://swapi.dev/api/species/1/',
        },
      ],
    };
    
    render(
      <SpeciesSection
        resident={residentWithIncompleteSpecies}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('Human')).toBeInTheDocument();
    // Designation should be empty when undefined - check for mammal and bullet
    expect(screen.getByText(/mammal •/)).toBeInTheDocument();
  });

  it('renders with different climate colors', () => {
    const { rerender } = render(
      <SpeciesSection
        resident={mockResident}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('Species')).toBeInTheDocument();
    
    rerender(
      <SpeciesSection
        resident={mockResident}
        climateColor="#4ECDC4"
      />
    );
    
    expect(screen.getByText('Species')).toBeInTheDocument();
  });

  it('renders icon with correct styling', () => {
    render(
      <SpeciesSection
        resident={mockResident}
        climateColor="#FF6B6B"
      />
    );
    
    const icon = screen.getByTestId('CategoryOutlinedIcon');
    expect(icon).toHaveStyle({ fontSize: '18px' });
  });
});
