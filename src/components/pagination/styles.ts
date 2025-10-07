import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { palette } from "../../../theme/palette";
import { theme } from "../../../theme/theme";

export const PaginationContainer = styled(Box)(
  ({ isMobile }: { isMobile: boolean }) => ({
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: isMobile
      ? `${theme.spacing(1)} ${theme.spacing(2)}`
      : `${theme.spacing(2)} ${theme.spacing(24)}`,
    background: `linear-gradient(135deg, ${palette.galactic.space} 50%, ${palette.galactic.nebula} 100%)`,
    borderRadius: "20px",
    border: `1px solid ${palette.galactic.metal}30`,
    position: "relative",
    minHeight: "70px",
  })
);

export const PagesContainer = styled(Box)<{ totalPages?: number }>(
  ({ totalPages }) => ({
    display: totalPages && totalPages <= 1 ? "none" : "flex",
    alignItems: "center",
    gap: "12px",
    justifyContent: "center",
    flex: 1,
  })
);

export const PaginationButton = styled(Button)<{
  active?: boolean;
  isMobile?: boolean;
}>(({ active, disabled, isMobile }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: isMobile ? "28px" : "36px",
  height: isMobile ? "28px" : "36px",
  borderRadius: "8px",
  ...(disabled && {
    display: "none",
  }),
  ...(active &&
    !disabled && {
      background: `linear-gradient(135deg, ${palette.starWarsYellow} 0%, ${palette.galactic.gold} 100%)`,
      color: palette.galactic.space,
      border: `1px solid ${palette.starWarsYellow}`,
    }),

  ...(!active &&
    !disabled && {
      background: `linear-gradient(135deg, ${palette.galactic.nebula} 0%, ${palette.galactic.space} 100%)`,
      color: palette.galactic.stars,
      border: `1px solid ${palette.galactic.metal}40`,
      "&:hover": {
        background: `linear-gradient(135deg, ${palette.galactic.space} 0%, ${palette.galactic.nebula} 100%)`,
        borderColor: palette.galactic.metal,
        boxShadow: `0 2px 12px ${palette.galactic.metal}30`,
        transform: "translateY(-1px)",
      },
    }),
}));

export const PageInfo = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  color: palette.galactic.stars,
  fontSize: "14px",
  fontWeight: 500,
  padding: "8px 16px",
  background: `${palette.galactic.nebula}30`,
  borderRadius: "12px",
  border: `1px solid ${palette.galactic.metal}`,
  backdropFilter: "blur(8px)",
  position: "absolute",
  right: 24,
  minWidth: "170px",
  justifyContent: "center",
}));

export const Ellipsis = styled(Typography)(() => ({
  color: palette.galactic.metal,
  fontWeight: "bold",
  fontSize: "18px",
  padding: "0 4px",
}));
