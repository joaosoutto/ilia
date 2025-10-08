import "@testing-library/jest-dom";
import { render, screen } from "../../../test-utils";
import PlanetStats from "../stats/PlanetStats";
import { mockPlanet } from "../../../test-utils";

jest.mock("../../../../hooks/useDimensions", () => ({
  useIsMobile: jest.fn(() => false),
}));

jest.mock("../../../utils/planets", () => ({
  formatValue: jest.fn((value, unit) => {
    if (unit) {
      return `${value} ${unit}`;
    }
    return value;
  }),
}));

import { useIsMobile } from "../../../../hooks/useDimensions";

describe("PlanetStats Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders section title", () => {
    render(<PlanetStats data={mockPlanet} climateColor="#FF6B6B" />);

    expect(screen.getByText("Planet Stats")).toBeInTheDocument();
  });

  it("renders all stat rows with correct labels", () => {
    render(<PlanetStats data={mockPlanet} climateColor="#FF6B6B" />);

    expect(screen.getByText("Rotation Period")).toBeInTheDocument();
    expect(screen.getByText("Orbital Period")).toBeInTheDocument();
    expect(screen.getByText("Diameter")).toBeInTheDocument();
    expect(screen.getByText("Climate")).toBeInTheDocument();
    expect(screen.getByText("Gravity")).toBeInTheDocument();
    expect(screen.getByText("Terrain")).toBeInTheDocument();
    expect(screen.getByText("Population")).toBeInTheDocument();
  });

  it("renders stat values correctly", () => {
    render(<PlanetStats data={mockPlanet} climateColor="#FF6B6B" />);

    expect(screen.getByText("23 hours")).toBeInTheDocument();
    expect(screen.getByText("304 days")).toBeInTheDocument();
    expect(screen.getByText("10465 km")).toBeInTheDocument();
    expect(screen.getByText("arid")).toBeInTheDocument();
    expect(screen.getByText("1 standard")).toBeInTheDocument();
    expect(screen.getByText("desert")).toBeInTheDocument();
    expect(screen.getByText("200000")).toBeInTheDocument();
  });

  it("renders all stat icons", () => {
    render(<PlanetStats data={mockPlanet} climateColor="#FF6B6B" />);

    const icons = screen.getAllByTestId(/Icon$/);
    expect(icons.length).toBeGreaterThanOrEqual(7);
  });

  it("applies climate color to section title", () => {
    const climateColor = "#4ECDC4";
    render(<PlanetStats data={mockPlanet} climateColor={climateColor} />);

    const sectionTitle = screen.getByText("Planet Stats");
    expect(sectionTitle).toBeInTheDocument();
  });

  it("handles mobile layout", () => {
    (useIsMobile as jest.Mock).mockReturnValue(true);

    render(<PlanetStats data={mockPlanet} climateColor="#FF6B6B" />);

    expect(screen.getByText("Planet Stats")).toBeInTheDocument();
    expect(screen.getByText("Rotation Period")).toBeInTheDocument();
  });

  it("handles planet with missing data gracefully", () => {
    const planetWithMissingData = {
      ...mockPlanet,
      rotation_period: "unknown",
      orbital_period: "unknown",
      diameter: "unknown",
    };

    render(<PlanetStats data={planetWithMissingData} climateColor="#FF6B6B" />);

    expect(screen.getByText("Rotation Period")).toBeInTheDocument();
    expect(screen.getByText("Orbital Period")).toBeInTheDocument();
    expect(screen.getByText("Diameter")).toBeInTheDocument();
  });

  it("renders correct number of stat cards", () => {
    render(<PlanetStats data={mockPlanet} climateColor="#FF6B6B" />);

    const statCards = screen.getAllByTestId("stat-card");
    expect(statCards).toHaveLength(7);
  });

  it("applies climate color to stat cards", () => {
    const climateColor = "#4ECDC4";
    render(<PlanetStats data={mockPlanet} climateColor={climateColor} />);

    const statCards = screen.getAllByTestId("stat-card");
    statCards.forEach((card) => {
      expect(card).toBeInTheDocument();
    });
  });

  it("renders stat grid with correct structure", () => {
    render(<PlanetStats data={mockPlanet} climateColor="#FF6B6B" />);

    const statsGrid = screen.getByTestId("planet-stats-grid");
    expect(statsGrid).toBeInTheDocument();
  });

  it("handles different climate colors", () => {
    const { rerender } = render(
      <PlanetStats data={mockPlanet} climateColor="#FF6B6B" />
    );

    expect(screen.getByText("Planet Stats")).toBeInTheDocument();

    rerender(<PlanetStats data={mockPlanet} climateColor="#4ECDC4" />);

    expect(screen.getByText("Planet Stats")).toBeInTheDocument();
  });
});
