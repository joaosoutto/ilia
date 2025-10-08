import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { theme } from "../../../theme/theme";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";

export const PlanetDetailContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<{ isMobile: boolean }>(
  ({ isMobile }) => ({
    width: "100%",
    padding: isMobile ? theme.spacing(3) : theme.spacing(3, 32),
    height: "100%",
    flex: 1,
    maxHeight: "100%",
    overflow: "auto",
  })
);

export const PlanetHeader = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'climateColor',
})<{ climateColor: string }>(
  ({ climateColor }) => ({
    background: `linear-gradient(135deg, ${climateColor}15, ${climateColor}05)`,
    border: `2px solid ${climateColor}30`,
    borderRadius: theme.spacing(4),
    position: "relative",
    overflow: "hidden",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "4px",
      background: `linear-gradient(90deg, transparent, ${climateColor}, transparent)`,
    },
  })
);

export const PlanetHeaderContent = styled(CardContent)(() => ({
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: theme.spacing(2),
}));

export const PlanetName = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'climateColor' && prop !== 'isMobile',
})<{
  climateColor: string;
  isMobile: boolean;
}>(({ climateColor, isMobile }) => ({
  fontSize: isMobile ? "32px" : "48px",
  fontWeight: 800,
  color: climateColor,
  background: `linear-gradient(135deg, ${climateColor}, ${climateColor}80)`,
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  letterSpacing: "0.5px",
}));

export const PlanetHeaderIconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'climateColor',
})<{ climateColor: string }>(
  ({ climateColor }) => ({
    background: `linear-gradient(135deg, ${climateColor}20, ${climateColor}10)`,
    borderRadius: "50%",
    padding: 4,
    border: `4px solid ${climateColor}40`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);

export const PlanetStatsGrid = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<{ isMobile: boolean }>(
  ({ isMobile }) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
    gap: theme.spacing(2),
    marginTop: theme.spacing(2),
  })
);

export const StatCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'climateColor',
})<{ climateColor: string }>(
  ({ climateColor }) => ({
    background: `linear-gradient(135deg, ${climateColor}10, ${climateColor}10)`,
    border: `1px solid ${climateColor}`,
    borderRadius: theme.spacing(2),
  })
);

export const StatCardContent = styled(CardContent)(() => ({
  padding: theme.spacing(2),
}));

export const StatLabel = styled(Typography)(() => ({
  fontSize: "12px",
  fontWeight: 600,
  color: theme.palette.text.secondary,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  marginBottom: theme.spacing(0.5),
}));

export const StatValue = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'climateColor',
})<{ climateColor: string }>(
  ({ climateColor }) => ({
    fontSize: "18px",
    fontWeight: 700,
    color: climateColor,
    textTransform: "capitalize",
  })
);

export const SectionTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'climateColor',
})<{ climateColor: string }>(
  ({ climateColor }) => ({
    fontSize: "32px",
    fontWeight: 700,
    color: climateColor,
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(4),
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-8px",
      left: 0,
      width: "60px",
      height: "3px",
      background: `linear-gradient(90deg, ${climateColor}, transparent)`,
      borderRadius: "2px",
    },
  })
);

export const ResidentsGrid = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<{ isMobile: boolean }>(
  ({ isMobile }) => ({
    display: "grid",
    gridTemplateColumns: isMobile ? "repeat(1, 1fr)" : "repeat(3, 1fr)",
    gap: theme.spacing(3),
  })
);

export const ResidentCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'climateColor',
})<{ climateColor: string }>(
  ({ climateColor }) => ({
    background: `linear-gradient(135deg, ${climateColor}10, ${climateColor}05)`,
    border: `1px solid ${climateColor}`,
    borderRadius: theme.spacing(2),
  })
);

export const ResidentCardContent = styled(CardContent)(() => ({
  padding: theme.spacing(3),
}));

export const ResidentName = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'climateColor',
})<{ climateColor: string }>(
  ({ climateColor }) => ({
    fontSize: "28px",
    fontWeight: 700,
    color: climateColor,
    marginBottom: theme.spacing(2),
  })
);

export const ResidentInfoStack = styled(Stack)(() => ({
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

export const SubsectionTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'climateColor',
})<{ climateColor: string }>(
  ({ climateColor }) => ({
    fontSize: "18px",
    fontWeight: 600,
    color: climateColor,
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(2),
  })
);

export const AdditionalInfoItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'climateColor',
})<{ climateColor: string }>(
  ({ climateColor }) => ({
    background: `linear-gradient(135deg, ${climateColor}08, ${climateColor}03)`,
    border: `1px solid ${climateColor}20`,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1.5),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "75px",
  })
);

export const AdditionalInfoDetails = styled(Typography)(() => ({
  fontSize: "14px",
  color: theme.palette.text.secondary,
}));

export const AdditionalInfoList = styled(Stack)(() => ({
  gap: theme.spacing(1),
}));

export const AdditionalInfoName = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'climateColor',
})<{ climateColor: string }>(
  ({ climateColor }) => ({
    fontSize: "16px",
    fontWeight: 600,
    color: climateColor,
    marginBottom: theme.spacing(0.5),
  })
);

export const HandlerContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "50vh",
  color: theme.palette.text.secondary,
  width: "100%",
  padding: theme.spacing(3, 24),
}));
