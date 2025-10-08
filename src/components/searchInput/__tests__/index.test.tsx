import { render, screen } from "../../../test-utils";
import SearchInput from "../index";
import userEvent from "@testing-library/user-event";

describe("SearchInput Component", () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  it("renders search input with default placeholder", () => {
    render(<SearchInput onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();
  });

  it("renders search input with custom placeholder", () => {
    render(
      <SearchInput placeholder="Find planets..." onChange={mockOnChange} />
    );

    const input = screen.getByPlaceholderText("Find planets...");
    expect(input).toBeInTheDocument();
  });

  it("displays search icon", () => {
    render(<SearchInput onChange={mockOnChange} />);

    const searchIcon = screen.getByTestId("SearchOutlinedIcon");
    expect(searchIcon).toBeInTheDocument();
  });

  it("calls onChange when user types", async () => {
    const user = userEvent.setup();
    render(<SearchInput onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText("Search...");
    await user.type(input, "Tatooine");

    expect(mockOnChange).toHaveBeenCalledWith("T");
    expect(mockOnChange).toHaveBeenCalledWith("Ta");
    expect(mockOnChange).toHaveBeenCalledWith("Tat");
    expect(mockOnChange).toHaveBeenCalledWith("Tato");
    expect(mockOnChange).toHaveBeenCalledWith("Tatoo");
    expect(mockOnChange).toHaveBeenCalledWith("Tatooi");
    expect(mockOnChange).toHaveBeenCalledWith("Tatooin");
    expect(mockOnChange).toHaveBeenCalledWith("Tatooine");
  });

  it("displays loading spinner when isLoading is true", () => {
    render(<SearchInput onChange={mockOnChange} isLoading={true} />);

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("disables input when isLoading is true", () => {
    render(<SearchInput onChange={mockOnChange} isLoading={true} />);

    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeDisabled();
  });

  it("shows clear button when value is provided", () => {
    render(<SearchInput onChange={mockOnChange} value="Tatooine" />);

    const clearButton = screen.getByRole("button");
    expect(clearButton).toBeInTheDocument();
  });

  it("does not show clear button when value is empty", () => {
    render(<SearchInput onChange={mockOnChange} value="" />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("clears input when clear button is clicked", async () => {
    const user = userEvent.setup();
    render(<SearchInput onChange={mockOnChange} value="Tatooine" />);

    const clearButton = screen.getByRole("button");
    await user.click(clearButton);

    expect(mockOnChange).toHaveBeenCalledWith("");
  });

  it("displays current value correctly", () => {
    render(<SearchInput onChange={mockOnChange} value="Alderaan" />);

    const input = screen.getByDisplayValue("Alderaan");
    expect(input).toBeInTheDocument();
  });

  it("handles controlled input correctly", async () => {
    const user = userEvent.setup();
    render(<SearchInput onChange={mockOnChange} value="Test" />);

    const input = screen.getByDisplayValue("Test");
    await user.clear(input);
    await user.type(input, "New Value");

    expect(mockOnChange).toHaveBeenCalledWith("");

    expect(mockOnChange).toHaveBeenCalledTimes(10);
  });

  it("does not show clear button when loading", () => {
    render(
      <SearchInput onChange={mockOnChange} value="Test" isLoading={true} />
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders with full width", () => {
    render(<SearchInput onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText("Search...");
    expect(input).toHaveClass("MuiInputBase-input");
  });

  it("handles undefined onChange gracefully", async () => {
    const user = userEvent.setup();
    render(<SearchInput />);

    const input = screen.getByPlaceholderText("Search...");
    await user.type(input, "Test");

    expect(input).toBeInTheDocument();
  });

  it("handles undefined value gracefully", () => {
    render(<SearchInput onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  it("shows clear button with close icon", () => {
    render(<SearchInput onChange={mockOnChange} value="Test" />);

    const closeIcon = screen.getByTestId("CloseIcon");
    expect(closeIcon).toBeInTheDocument();
  });
});
