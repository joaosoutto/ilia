import { render, screen } from "../../../../test-utils";
import Stars from "../Stars";

const mockMathRandom = jest.spyOn(Math, "random");

describe("Stars Component", () => {
  beforeEach(() => {
    mockMathRandom.mockRestore();
  });

  afterAll(() => {
    mockMathRandom.mockRestore();
  });

  it("renders with default props", () => {
    render(<Stars />);

    const starsWrapper = screen.getByTestId("stars-wrapper");
    expect(starsWrapper).toBeInTheDocument();
  });

  it("renders correct number of stars with default count", () => {
    mockMathRandom
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.7)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.2)
      .mockReturnValueOnce(0.8);

    render(<Stars />);

    const starElements = screen.getAllByTestId("star-container");
    expect(starElements).toHaveLength(40);
  });

  it("renders correct number of stars with custom count", () => {
    render(<Stars count={10} />);

    const starElements = screen.getAllByTestId("star-container");
    expect(starElements).toHaveLength(10);
  });

  it("applies mobile styles when isMobile is true", () => {
    render(<Stars isMobile={true} />);

    const starsWrapper = screen.getByTestId("stars-wrapper");
    expect(starsWrapper).toHaveStyle({
      width: "30vw",
      height: "60px",
    });
  });

  it("applies desktop styles when isMobile is false", () => {
    render(<Stars isMobile={false} />);

    const starsWrapper = screen.getByTestId("stars-wrapper");
    expect(starsWrapper).toHaveStyle({
      width: "70vw",
      height: "60px",
    });
  });

  it("applies custom top and right positioning", () => {
    render(<Stars top={100} right={200} />);

    const starsWrapper = screen.getByTestId("stars-wrapper");
    expect(starsWrapper).toHaveStyle({
      top: "100px",
      right: "200px",
    });
  });

  it("generates stars with random properties", () => {
    mockMathRandom
      .mockReturnValueOnce(0.2)
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.8)
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.6);

    render(<Stars count={1} />);

    const starElement = screen.getByTestId("star-container");
    expect(starElement).toBeInTheDocument();
  });

  it("handles zero count gracefully", () => {
    render(<Stars count={0} />);

    const starElements = screen.queryAllByTestId("star-container");
    expect(starElements).toHaveLength(0);
  });

  it("handles negative count gracefully", () => {
    render(<Stars count={-5} />);

    const starElements = screen.queryAllByTestId("star-container");
    expect(starElements).toHaveLength(0);
  });

  it("applies absolute positioning to wrapper", () => {
    render(<Stars />);

    const starsWrapper = screen.getByTestId("stars-wrapper");
    expect(starsWrapper).toHaveStyle({
      position: "absolute",
    });
  });

  it("applies overflow hidden to wrapper", () => {
    render(<Stars />);

    const starsWrapper = screen.getByTestId("stars-wrapper");
    expect(starsWrapper).toHaveStyle({
      overflow: "hidden",
    });
  });

  it("renders stars with different random properties", () => {
    let callCount = 0;
    mockMathRandom.mockImplementation(() => {
      const values = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.0];
      return values[callCount++ % values.length];
    });

    render(<Stars count={2} />);

    const starElements = screen.getAllByTestId("star-container");
    expect(starElements).toHaveLength(2);

    starElements.forEach((star) => {
      expect(star).toBeInTheDocument();
    });
  });

  it("uses default values when props are not provided", () => {
    render(<Stars />);

    const starsWrapper = screen.getByTestId("stars-wrapper");
    expect(starsWrapper).toBeInTheDocument();

    const starElements = screen.getAllByTestId("star-container");
    expect(starElements).toHaveLength(40);
  });

  it("combines all props correctly", () => {
    render(<Stars count={5} isMobile={true} top={50} right={100} />);

    const starsWrapper = screen.getByTestId("stars-wrapper");
    expect(starsWrapper).toHaveStyle({
      width: "30vw",
      height: "60px",
      top: "50px",
      right: "100px",
    });

    const starElements = screen.getAllByTestId("star-container");
    expect(starElements).toHaveLength(5);
  });
});
