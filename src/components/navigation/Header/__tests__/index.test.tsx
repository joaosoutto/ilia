import { render, screen } from "../../../../test-utils";
import Header from "../index";
import userEvent from "@testing-library/user-event";

// Mock Next.js router
const mockPush = jest.fn();
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Mock the hooks
jest.mock("../../../../../hooks/useDimensions", () => ({
  useIsMobile: () => false,
}));

// Mock the DarthVaderIcon component
jest.mock("../../../../../src/assets/svgs/DarthVaderIcon", () => {
  return function MockDarthVaderIcon({
    width,
    height,
    color,
  }: {
    width: string;
    height: string;
    color: string;
  }) {
    return (
      <div data-testid="darth-vader-icon" style={{ width, height, color }}>
        DarthVader
      </div>
    );
  };
});

describe("Header Component", () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it("renders header with correct title", () => {
    render(<Header />);

    expect(screen.getByText("SW Planets")).toBeInTheDocument();
  });

  it("renders DarthVader icon", () => {
    render(<Header />);

    expect(screen.getByTestId("darth-vader-icon")).toBeInTheDocument();
  });

  it("navigates to home page when clicked", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const headerSection = screen.getByTestId("darth-vader-icon").closest("div");
    await user.click(headerSection!);

    expect(mockPush).toHaveBeenCalledWith("/");
  });

  it("renders with correct AppBar structure", () => {
    render(<Header />);

    const appBar = screen.getByRole("banner");
    expect(appBar).toBeInTheDocument();
  });

  it("displays correct icon size for desktop", () => {
    render(<Header />);

    const icon = screen.getByTestId("darth-vader-icon");
    expect(icon).toHaveStyle({ width: "42px", height: "42px" });
  });

  it("has correct typography styling", () => {
    render(<Header />);

    const title = screen.getByText("SW Planets");
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H5");
  });

  it("renders clickable router section", () => {
    render(<Header />);

    const routerSection = screen.getByTestId("darth-vader-icon").closest("div");
    expect(routerSection).toBeInTheDocument();
  });

  it("contains both icon and title in router section", () => {
    render(<Header />);

    expect(screen.getByTestId("darth-vader-icon")).toBeInTheDocument();
    expect(screen.getByText("SW Planets")).toBeInTheDocument();
  });
});
