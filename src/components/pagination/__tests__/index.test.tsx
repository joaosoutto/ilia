import { render, screen } from '../../../test-utils'
import Pagination from '../index'
import userEvent from '@testing-library/user-event'

// Mock the hooks
jest.mock('../../../../hooks/useDimensions', () => ({
  useIsMobile: () => false,
  useIsTablet: () => false,
}))

// Mock the pagination utility
jest.mock('../../../../src/utils/pagination', () => ({
  getVisiblePages: jest.fn((currentPage, totalPages) => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    if (currentPage <= 3) {
      return [1, 2, 3, 4, '...', totalPages]
    }
    if (currentPage >= totalPages - 2) {
      return [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
  })
}))

describe('Pagination Component', () => {
  const mockOnPageChange = jest.fn()

  beforeEach(() => {
    mockOnPageChange.mockClear()
  })

  it('renders pagination with correct page numbers', () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={50}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
      />
    )

    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('shows loading state when isLoading is true', () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={50}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
        isLoading={true}
      />
    )

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
    expect(screen.queryByText('1')).not.toBeInTheDocument()
  })

  it('displays page information correctly', () => {
    render(
      <Pagination
        currentPage={2}
        totalItems={50}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
      />
    )

    expect(screen.getByText('Page 2 of 5')).toBeInTheDocument()
    expect(screen.getByText('50 planets')).toBeInTheDocument()
  })

  it('shows "No planets found" when totalPages is 1', () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={5}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
      />
    )

    expect(screen.getByText('No planets found')).toBeInTheDocument()
  })

  it('handles page navigation correctly', async () => {
    const user = userEvent.setup()
    render(
      <Pagination
        currentPage={2}
        totalItems={50}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
      />
    )

    const nextButton = screen.getByTestId('KeyboardArrowRightIcon').closest('button')
    await user.click(nextButton!)

    expect(mockOnPageChange).toHaveBeenCalledWith(3)
  })

  it('handles previous page navigation correctly', async () => {
    const user = userEvent.setup()
    render(
      <Pagination
        currentPage={3}
        totalItems={50}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
      />
    )

    const prevButton = screen.getByTestId('KeyboardArrowLeftIcon').closest('button')
    await user.click(prevButton!)

    expect(mockOnPageChange).toHaveBeenCalledWith(2)
  })

  it('disables previous button on first page', () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={50}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
      />
    )

    const prevButton = screen.getByTestId('KeyboardArrowLeftIcon').closest('button')
    expect(prevButton).toBeDisabled()
  })

  it('disables next button on last page', () => {
    render(
      <Pagination
        currentPage={5}
        totalItems={50}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
      />
    )

    const nextButton = screen.getByTestId('KeyboardArrowRightIcon').closest('button')
    expect(nextButton).toBeDisabled()
  })

  it('handles page number clicks correctly', async () => {
    const user = userEvent.setup()
    render(
      <Pagination
        currentPage={1}
        totalItems={50}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
      />
    )

    const page3Button = screen.getByText('3')
    await user.click(page3Button)

    expect(mockOnPageChange).toHaveBeenCalledWith(3)
  })

  it('does not call onPageChange when clicking current page', async () => {
    const user = userEvent.setup()
    render(
      <Pagination
        currentPage={2}
        totalItems={50}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
      />
    )

    const currentPageButton = screen.getByText('2')
    await user.click(currentPageButton)

    expect(mockOnPageChange).not.toHaveBeenCalled()
  })

  it('renders ellipsis for large page counts', () => {
    render(
      <Pagination
        currentPage={5}
        totalItems={100}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
      />
    )

    const ellipsisElements = screen.getAllByText('⋯')
    expect(ellipsisElements).toHaveLength(2)
  })

  it('does not render next button when totalPages is 1', () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={5}
        itemsPerPage={10}
        onPageChange={mockOnPageChange}
      />
    )

    expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument()
  })

  it('uses custom itemsPerPage correctly', () => {
    render(
      <Pagination
        currentPage={1}
        totalItems={25}
        itemsPerPage={5}
        onPageChange={mockOnPageChange}
      />
    )

    expect(screen.getByText('Page 1 of 5')).toBeInTheDocument()
  })
})
