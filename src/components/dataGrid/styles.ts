import { Box, styled, keyframes } from "@mui/material";
import { palette } from "../../../theme/palette";
import { theme } from "../../../theme/theme";

export const NoResultsWrapper = styled(Box)(() => ({
  flex: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "32px",
  padding: "80px 24px",
  background: `linear-gradient(135deg, ${palette.galactic.nebula} 0%, ${palette.galactic.space} 100%)`,
  borderRadius: "20px",
  border: `1px solid ${palette.galactic.metal}30`,
  minHeight: "400px",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, ${palette.galactic.stars}15 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, ${palette.galactic.stars}12 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, ${palette.galactic.stars}10 0%, transparent 50%),
      radial-gradient(circle at 10% 70%, ${palette.galactic.stars}08 0%, transparent 40%),
      radial-gradient(circle at 90% 30%, ${palette.galactic.stars}06 0%, transparent 35%)
    `,
    pointerEvents: "none",
  },
}));

export const NoResultsIcon = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  background: `linear-gradient(135deg, ${palette.galactic.metal}20 0%, ${palette.galactic.nebula}30 100%)`,
  border: `2px solid ${palette.galactic.metal}40`,
  position: "relative",
  zIndex: 1,
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-4px",
    left: "-4px",
    right: "-4px",
    bottom: "-4px",
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${palette.galactic.stars}20 0%, transparent 100%)`,
    zIndex: -1,
  },
}));

export const NoResultsText = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  color: palette.galactic.stars,
  position: "relative",
  zIndex: 1,
}));

export const DataGridWrapper = styled(Box)(
  ({ isMobile }: { isMobile: boolean }) => ({
    width: "100%",
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)",
    gap: "16px",
    padding: isMobile
      ? `${theme.spacing(1)} ${theme.spacing(0)}`
      : `${theme.spacing(1)} ${theme.spacing(2.5)}`,
    maxHeight: isMobile ? "90%" : "100vh",
    overflow: "auto",
    // border: `1px solid ${palette.galactic.metal}`,
    flex: 1,
  })
);

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled(Box)(() => ({
  flex: 1,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "24px",
  padding: "60px 24px",
  background: `linear-gradient(135deg, ${palette.galactic.space} 50%, ${palette.galactic.nebula} 100%)`,
  borderRadius: "20px",
  border: `1px solid ${palette.galactic.metal}30`,
  minHeight: "400px",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, ${palette.galactic.stars}20 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, ${palette.galactic.stars}15 0%, transparent 50%),
      radial-gradient(circle at 40% 60%, ${palette.galactic.stars}10 0%, transparent 50%)
    `,
    pointerEvents: "none",
  },
}));

export const SpinningPlanet = styled(Box)(() => ({
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  background: `linear-gradient(135deg, ${palette.starWarsYellow} 0%, ${palette.galactic.gold} 100%)`,
  border: `3px solid ${palette.galactic.stars}`,
  position: "relative",
  animation: `${spin} 2s linear infinite`,
  boxShadow: `
    0 0 30px ${palette.starWarsYellow}50,
    inset 0 3px 6px ${palette.galactic.stars}40
  `,
  "&::before": {
    content: '""',
    position: "absolute",
    top: "12px",
    left: "16px",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: palette.galactic.space,
    opacity: 0.7,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "28px",
    right: "14px",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: palette.galactic.space,
    opacity: 0.5,
  },
}));

export const LoaderText = styled(Box)(() => ({
  color: palette.galactic.stars,
  fontSize: "18px",
  fontWeight: 600,
  textAlign: "center",
  letterSpacing: "0.5px",
}));
