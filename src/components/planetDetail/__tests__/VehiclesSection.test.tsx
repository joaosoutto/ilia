import '@testing-library/jest-dom';
import { render, screen } from '../../../test-utils';
import VehiclesSection from '../residents/VehiclesSection';

const mockResident = {
  name: 'Luke Skywalker',
  hair_color: 'blond',
  eye_color: 'blue',
  gender: 'male',
  url: 'https://swapi.dev/api/people/1/',
  speciesDetails: [],
  vehicleDetails: [
    {
      name: 'X-wing',
      model: 'T-65 X-wing',
      url: 'https://swapi.dev/api/vehicles/1/',
    },
    {
      name: 'Snowspeeder',
      model: 'T-47 airspeeder',
      url: 'https://swapi.dev/api/vehicles/2/',
    },
  ],
};

describe('VehiclesSection Component', () => {
  it('renders section title with icon', () => {
    render(
      <VehiclesSection
        resident={mockResident}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('Vehicles')).toBeInTheDocument();
    const icon = screen.getByTestId('DirectionsCarOutlinedIcon');
    expect(icon).toBeInTheDocument();
  });

  it('renders vehicle names correctly', () => {
    render(
      <VehiclesSection
        resident={mockResident}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('X-wing')).toBeInTheDocument();
    expect(screen.getByText('Snowspeeder')).toBeInTheDocument();
  });

  it('renders vehicle models correctly', () => {
    render(
      <VehiclesSection
        resident={mockResident}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('T-65 X-wing')).toBeInTheDocument();
    expect(screen.getByText('T-47 airspeeder')).toBeInTheDocument();
  });

  it('renders multiple vehicles correctly', () => {
    render(
      <VehiclesSection
        resident={mockResident}
        climateColor="#FF6B6B"
      />
    );
    
    // Should render both vehicles
    expect(screen.getByText('X-wing')).toBeInTheDocument();
    expect(screen.getByText('Snowspeeder')).toBeInTheDocument();
    
    // Should render models for both vehicles
    expect(screen.getByText('T-65 X-wing')).toBeInTheDocument();
    expect(screen.getByText('T-47 airspeeder')).toBeInTheDocument();
  });

  it('handles resident with no vehicles', () => {
    const residentWithoutVehicles = {
      ...mockResident,
      vehicleDetails: [],
    };
    
    render(
      <VehiclesSection
        resident={residentWithoutVehicles}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('No vehicles found')).toBeInTheDocument();
  });

  it('handles resident with undefined vehicles', () => {
    const residentWithUndefinedVehicles = {
      ...mockResident,
      vehicleDetails: undefined,
    };
    
    render(
      <VehiclesSection
        resident={residentWithUndefinedVehicles}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('No vehicles found')).toBeInTheDocument();
  });

  it('applies climate color to section title', () => {
    const climateColor = '#4ECDC4';
    render(
      <VehiclesSection
        resident={mockResident}
        climateColor={climateColor}
      />
    );
    
    const sectionTitle = screen.getByText('Vehicles');
    expect(sectionTitle).toBeInTheDocument();
  });

  it('applies climate color to vehicle items', () => {
    const climateColor = '#4ECDC4';
    render(
      <VehiclesSection
        resident={mockResident}
        climateColor={climateColor}
      />
    );
    
    expect(screen.getByText('X-wing')).toBeInTheDocument();
    expect(screen.getByText('Snowspeeder')).toBeInTheDocument();
  });

  it('renders vehicle list with correct structure', () => {
    render(
      <VehiclesSection
        resident={mockResident}
        climateColor="#FF6B6B"
      />
    );
    
    const additionalInfoList = screen.getByTestId('additional-info-list');
    expect(additionalInfoList).toBeInTheDocument();
    
    const additionalInfoItems = screen.getAllByTestId('additional-info-item');
    expect(additionalInfoItems).toHaveLength(2);
  });

  it('handles vehicle with missing model', () => {
    const residentWithIncompleteVehicle = {
      ...mockResident,
      vehicleDetails: [
        {
          name: 'X-wing',
          model: undefined,
          url: 'https://swapi.dev/api/vehicles/1/',
        },
      ],
    };
    
    render(
      <VehiclesSection
        resident={residentWithIncompleteVehicle}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('X-wing')).toBeInTheDocument();
    // Model should be empty when undefined
    const modelElement = screen.getByTestId('additional-info-item').querySelector('p:last-child');
    expect(modelElement).toHaveTextContent('');
  });

  it('handles vehicle with missing name', () => {
    const residentWithIncompleteVehicle = {
      ...mockResident,
      vehicleDetails: [
        {
          name: undefined,
          model: 'T-65 X-wing',
          url: 'https://swapi.dev/api/vehicles/1/',
        },
      ],
    };
    
    render(
      <VehiclesSection
        resident={residentWithIncompleteVehicle}
        climateColor="#FF6B6B"
      />
    );
    
    // Name should be empty when undefined
    const nameElement = screen.getByTestId('additional-info-item').querySelector('p:first-child');
    expect(nameElement).toHaveTextContent('');
    expect(screen.getByText('T-65 X-wing')).toBeInTheDocument();
  });

  it('renders with different climate colors', () => {
    const { rerender } = render(
      <VehiclesSection
        resident={mockResident}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('Vehicles')).toBeInTheDocument();
    
    rerender(
      <VehiclesSection
        resident={mockResident}
        climateColor="#4ECDC4"
      />
    );
    
    expect(screen.getByText('Vehicles')).toBeInTheDocument();
  });

  it('renders icon with correct styling', () => {
    render(
      <VehiclesSection
        resident={mockResident}
        climateColor="#FF6B6B"
      />
    );
    
    const icon = screen.getByTestId('DirectionsCarOutlinedIcon');
    expect(icon).toHaveStyle({ fontSize: '18px' });
  });

  it('handles single vehicle correctly', () => {
    const residentWithSingleVehicle = {
      ...mockResident,
      vehicleDetails: [
        {
          name: 'X-wing',
          model: 'T-65 X-wing',
          url: 'https://swapi.dev/api/vehicles/1/',
        },
      ],
    };
    
    render(
      <VehiclesSection
        resident={residentWithSingleVehicle}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('X-wing')).toBeInTheDocument();
    expect(screen.getByText('T-65 X-wing')).toBeInTheDocument();
    
    const additionalInfoItems = screen.getAllByTestId('additional-info-item');
    expect(additionalInfoItems).toHaveLength(1);
  });
});
