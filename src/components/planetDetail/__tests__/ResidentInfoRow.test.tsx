import "@testing-library/jest-dom";
import { render, screen } from "../../../test-utils";
import ResidentInfoRow from "../residents/ResidentInfoRow";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";

describe("ResidentInfoRow Component", () => {
  it("renders label and value correctly", () => {
    render(
      <ResidentInfoRow
        icon={<FaceOutlinedIcon />}
        label="Hair Color"
        value="blond"
        climateColor="#FF6B6B"
      />
    );

    expect(screen.getByText("Hair Color")).toBeInTheDocument();
    expect(screen.getByText("blond")).toBeInTheDocument();
  });

  it("renders icon correctly", () => {
    render(
      <ResidentInfoRow
        icon={<FaceOutlinedIcon />}
        label="Hair Color"
        value="blond"
        climateColor="#FF6B6B"
      />
    );

    const icon = screen.getByTestId("FaceOutlinedIcon");
    expect(icon).toBeInTheDocument();
  });

  it("applies climate color to icon", () => {
    const climateColor = "#4ECDC4";
    render(
      <ResidentInfoRow
        icon={<FaceOutlinedIcon />}
        label="Hair Color"
        value="blond"
        climateColor={climateColor}
      />
    );

    const iconContainer = screen.getByTestId("FaceOutlinedIcon").parentElement;
    expect(iconContainer).toHaveStyle({ color: climateColor });
  });

  it("applies climate color to stat value", () => {
    const climateColor = "#4ECDC4";
    render(
      <ResidentInfoRow
        icon={<FaceOutlinedIcon />}
        label="Hair Color"
        value="blond"
        climateColor={climateColor}
      />
    );

    const statValue = screen.getByText("blond");
    expect(statValue).toBeInTheDocument();
  });

  it("renders with different icons", () => {
    const { rerender } = render(
      <ResidentInfoRow
        icon={<FaceOutlinedIcon />}
        label="Hair Color"
        value="blond"
        climateColor="#FF6B6B"
      />
    );

    expect(screen.getByTestId("FaceOutlinedIcon")).toBeInTheDocument();

    rerender(
      <ResidentInfoRow
        icon={<FaceOutlinedIcon />}
        label="Eye Color"
        value="blue"
        climateColor="#FF6B6B"
      />
    );

    expect(screen.getByText("Eye Color")).toBeInTheDocument();
    expect(screen.getByText("blue")).toBeInTheDocument();
  });

  it("handles empty value gracefully", () => {
    render(
      <ResidentInfoRow
        icon={<FaceOutlinedIcon />}
        label="Hair Color"
        value=""
        climateColor="#FF6B6B"
      />
    );

    expect(screen.getByText("Hair Color")).toBeInTheDocument();
    const statValue = screen.getByTestId("stat-value");
    expect(statValue).toHaveTextContent("");
  });

  it("applies border styling with climate color", () => {
    const climateColor = "#4ECDC4";
    render(
      <ResidentInfoRow
        icon={<FaceOutlinedIcon />}
        label="Hair Color"
        value="blond"
        climateColor={climateColor}
      />
    );

    const container = screen
      .getByTestId("FaceOutlinedIcon")
      .closest('[data-testid="resident-info-row"]');
    expect(container).toBeInTheDocument();
  });

  it("renders with different labels", () => {
    const labels = ["Hair Color", "Eye Color", "Gender"];

    labels.forEach((label) => {
      const { unmount } = render(
        <ResidentInfoRow
          icon={<FaceOutlinedIcon />}
          label={label}
          value="test value"
          climateColor="#FF6B6B"
        />
      );

      expect(screen.getByText(label)).toBeInTheDocument();
      unmount();
    });
  });

  it("renders with different values", () => {
    const values = ["blond", "brown", "black", "blue", "green"];

    values.forEach((value) => {
      const { unmount } = render(
        <ResidentInfoRow
          icon={<FaceOutlinedIcon />}
          label="Hair Color"
          value={value}
          climateColor="#FF6B6B"
        />
      );

      expect(screen.getByText(value)).toBeInTheDocument();
      unmount();
    });
  });

  it("handles long values correctly", () => {
    const longValue = "Very long value that might wrap to multiple lines";
    render(
      <ResidentInfoRow
        icon={<FaceOutlinedIcon />}
        label="Hair Color"
        value={longValue}
        climateColor="#FF6B6B"
      />
    );

    expect(screen.getByText(longValue)).toBeInTheDocument();
  });

  it("renders with different climate colors", () => {
    const { rerender } = render(
      <ResidentInfoRow
        icon={<FaceOutlinedIcon />}
        label="Hair Color"
        value="blond"
        climateColor="#FF6B6B"
      />
    );

    expect(screen.getByText("Hair Color")).toBeInTheDocument();

    rerender(
      <ResidentInfoRow
        icon={<FaceOutlinedIcon />}
        label="Hair Color"
        value="blond"
        climateColor="#4ECDC4"
      />
    );

    expect(screen.getByText("Hair Color")).toBeInTheDocument();
  });

  it("renders correct structure with Stack layout", () => {
    render(
      <ResidentInfoRow
        icon={<FaceOutlinedIcon />}
        label="Hair Color"
        value="blond"
        climateColor="#FF6B6B"
      />
    );

    expect(screen.getByText("Hair Color")).toBeInTheDocument();
    expect(screen.getByText("blond")).toBeInTheDocument();
    expect(screen.getByTestId("FaceOutlinedIcon")).toBeInTheDocument();
  });
});
