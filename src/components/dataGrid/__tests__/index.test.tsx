import '@testing-library/jest-dom';
import { render, screen } from "../../../test-utils";
import { DataGrid } from "../index";
import { mockPlanets } from "../../../test-utils";

describe("DataGrid Component", () => {
  it("renders loading state when isLoading is true", () => {
    render(<DataGrid results={undefined} isLoading={true} />);

    // Check if GridLoader is rendered (we'll need to add a test-id to it)
    expect(screen.getByTestId("grid-loader")).toBeInTheDocument();
  });

  it("renders no results message when results array is empty", () => {
    render(<DataGrid results={[]} isLoading={false} />);

    // Check if NoResults component is rendered
    expect(screen.getByTestId("no-results")).toBeInTheDocument();
  });

  it("renders planet cards when results are provided", () => {
    render(<DataGrid results={mockPlanets} isLoading={false} />);

    // Check if planet cards are rendered
    expect(screen.getByText("Tatooine")).toBeInTheDocument();
    expect(screen.getByText("Alderaan")).toBeInTheDocument();
  });

  it("renders correct number of planet cards", () => {
    render(<DataGrid results={mockPlanets} isLoading={false} />);

    // Should render 2 planet cards
    const planetCards = screen.getAllByTestId("planet-card");
    expect(planetCards).toHaveLength(2);
  });

  it("does not render planet cards when loading", () => {
    render(<DataGrid results={mockPlanets} isLoading={true} />);

    // Should not render planet cards when loading
    expect(screen.queryByText("Tatooine")).not.toBeInTheDocument();
    expect(screen.queryByText("Alderaan")).not.toBeInTheDocument();
  });

  it("does not render planet cards when no results", () => {
    render(<DataGrid results={[]} isLoading={false} />);

    // Should not render planet cards when no results
    expect(screen.queryByText("Tatooine")).not.toBeInTheDocument();
    expect(screen.queryByText("Alderaan")).not.toBeInTheDocument();
  });
});
