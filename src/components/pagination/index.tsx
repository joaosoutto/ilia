import React, { useMemo } from "react";
import Typography from "@mui/material/Typography";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { CircularProgress } from "@mui/material";
import { PaginationProps } from "./types";
import {
  PaginationContainer,
  PagesContainer,
  PaginationButton,
  PageInfo,
  Ellipsis,
} from "./styles";
import { palette } from "../../../theme/palette";
import { getVisiblePages } from "@/utils/pagination";
import { useIsMobile, useIsTablet } from "../../../hooks/useDimensions";

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage = 10,
  onPageChange,
  isLoading,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const visiblePages = useMemo(
    () => getVisiblePages(currentPage, totalPages),
    [currentPage, totalPages]
  );

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const isSmallScreen = isMobile || isTablet;

  // console.log(totalPages);

  return (
    <PaginationContainer isMobile={isMobile}>
      {isLoading ? (
        <PagesContainer>
          <CircularProgress size={20} sx={{ color: palette.galactic.stars }} />
        </PagesContainer>
      ) : (
        <PagesContainer totalPages={totalPages}>
          <PaginationButton
            isMobile={isMobile}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <KeyboardArrowLeftIcon />
          </PaginationButton>
          {visiblePages.map((page, idx) =>
            page === "..." ? (
              <Ellipsis key={`ellipsis-${idx}`}>⋯</Ellipsis>
            ) : (
              <PaginationButton
                isMobile={isMobile}
                key={page}
                active={currentPage === page}
                onClick={() => handlePageChange(page as number)}
              >
                {page}
              </PaginationButton>
            )
          )}
          {totalPages > 1 && (
            <PaginationButton
              isMobile={isMobile}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <KeyboardArrowRightIcon />
            </PaginationButton>
          )}
        </PagesContainer>
      )}

      {!isLoading && !isSmallScreen && (
        <PageInfo>
          <Typography variant="body2">
            {totalPages > 1
              ? `Page ${currentPage} of ${totalPages}`
              : "No planets found"}
          </Typography>
          <Typography variant="body2" component="span" sx={{ mx: 1 }}>
            |
          </Typography>
          <Typography variant="body2">{totalItems} planets</Typography>
        </PageInfo>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
