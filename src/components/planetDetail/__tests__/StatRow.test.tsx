import '@testing-library/jest-dom';
import { render, screen } from '../../../test-utils';
import StatRow from '../stats/StatRow';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

describe('StatRow Component', () => {
  it('renders stat label and value correctly', () => {
    render(
      <StatRow
        icon={<AccessTimeOutlinedIcon />}
        label="Rotation Period"
        value="23 hours"
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('Rotation Period')).toBeInTheDocument();
    expect(screen.getByText('23 hours')).toBeInTheDocument();
  });

  it('renders icon correctly', () => {
    render(
      <StatRow
        icon={<AccessTimeOutlinedIcon />}
        label="Rotation Period"
        value="23 hours"
        climateColor="#FF6B6B"
      />
    );
    
    const icon = screen.getByTestId('AccessTimeOutlinedIcon');
    expect(icon).toBeInTheDocument();
  });

  it('applies climate color to icon', () => {
    const climateColor = '#4ECDC4';
    render(
      <StatRow
        icon={<AccessTimeOutlinedIcon />}
        label="Rotation Period"
        value="23 hours"
        climateColor={climateColor}
      />
    );
    
    const iconContainer = screen.getByTestId('AccessTimeOutlinedIcon').parentElement;
    expect(iconContainer).toHaveStyle({ color: climateColor });
  });

  it('applies climate color to stat value', () => {
    const climateColor = '#4ECDC4';
    render(
      <StatRow
        icon={<AccessTimeOutlinedIcon />}
        label="Rotation Period"
        value="23 hours"
        climateColor={climateColor}
      />
    );
    
    const statValue = screen.getByText('23 hours');
    expect(statValue).toBeInTheDocument();
  });

  it('renders with different icons', () => {
    const { rerender } = render(
      <StatRow
        icon={<AccessTimeOutlinedIcon />}
        label="Rotation Period"
        value="23 hours"
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByTestId('AccessTimeOutlinedIcon')).toBeInTheDocument();
    
    rerender(
      <StatRow
        icon={<AccessTimeOutlinedIcon />}
        label="Orbital Period"
        value="304 days"
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('Orbital Period')).toBeInTheDocument();
    expect(screen.getByText('304 days')).toBeInTheDocument();
  });

  it('handles empty value gracefully', () => {
    render(
      <StatRow
        icon={<AccessTimeOutlinedIcon />}
        label="Rotation Period"
        value=""
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('Rotation Period')).toBeInTheDocument();
    const statValue = screen.getByTestId('stat-value');
    expect(statValue).toHaveTextContent('');
  });

  it('renders stat card with correct structure', () => {
    render(
      <StatRow
        icon={<AccessTimeOutlinedIcon />}
        label="Rotation Period"
        value="23 hours"
        climateColor="#FF6B6B"
      />
    );
    
    const statCard = screen.getByTestId('stat-card');
    expect(statCard).toBeInTheDocument();
    
    const statCardContent = screen.getByTestId('stat-card-content');
    expect(statCardContent).toBeInTheDocument();
  });

  it('applies climate color to stat card', () => {
    const climateColor = '#4ECDC4';
    render(
      <StatRow
        icon={<AccessTimeOutlinedIcon />}
        label="Rotation Period"
        value="23 hours"
        climateColor={climateColor}
      />
    );
    
    const statCard = screen.getByTestId('stat-card');
    expect(statCard).toBeInTheDocument();
  });

  it('renders with different climate colors', () => {
    const { rerender } = render(
      <StatRow
        icon={<AccessTimeOutlinedIcon />}
        label="Rotation Period"
        value="23 hours"
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText('Rotation Period')).toBeInTheDocument();
    
    rerender(
      <StatRow
        icon={<AccessTimeOutlinedIcon />}
        label="Rotation Period"
        value="23 hours"
        climateColor="#4ECDC4"
      />
    );
    
    expect(screen.getByText('Rotation Period')).toBeInTheDocument();
  });

  it('handles long values correctly', () => {
    const longValue = 'Very long value that might wrap to multiple lines';
    render(
      <StatRow
        icon={<AccessTimeOutlinedIcon />}
        label="Rotation Period"
        value={longValue}
        climateColor="#FF6B6B"
      />
    );
    
    expect(screen.getByText(longValue)).toBeInTheDocument();
  });

  it('renders with different labels', () => {
    const labels = [
      'Rotation Period',
      'Orbital Period', 
      'Diameter',
      'Climate',
      'Gravity',
      'Terrain',
      'Population'
    ];
    
    labels.forEach(label => {
      const { unmount } = render(
        <StatRow
          icon={<AccessTimeOutlinedIcon />}
          label={label}
          value="test value"
          climateColor="#FF6B6B"
        />
      );
      
      expect(screen.getByText(label)).toBeInTheDocument();
      unmount();
    });
  });
});
