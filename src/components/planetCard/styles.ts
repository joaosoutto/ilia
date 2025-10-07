import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { theme } from "../../../theme/theme";
import CardContent from "@mui/material/CardContent";

export const PlanetCardWrapper = styled(Card)<{ climateColor: string }>(
  ({ climateColor }) => ({
    border: `1px solid ${climateColor}30`,
    borderRadius: theme.spacing(2),
    position: "relative",
    transition: "all 0.4s ease",
    minHeight: "300px",
    maxHeight: "300px",
    "&:hover": {
      cursor: "pointer",
      boxShadow: `
              0 10px 20px ${climateColor}20,
              0 4px 8px rgba(0,0,0,0.1),
              inset 0 1px 0 rgba(255,255,255,0.2)
            `,
      borderColor: climateColor,
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "2px",
      background: `linear-gradient(90deg, transparent, ${climateColor}, transparent)`,
    },
  })
);

export const PlanetCardContainer = styled(Box)(
  ({ climateColor }: { climateColor: string }) => ({
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 2,
    borderRadius: "50%",
    padding: theme.spacing(0.5),
    border: `2px solid ${climateColor}40`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);

export const PlanetCardName = styled(Typography)(
  ({ climateColor }: { climateColor: string }) => ({
    background: `linear-gradient(135deg, ${climateColor}16, transparent)`,
    padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
    borderLeft: `4px solid ${climateColor}`,
  })
);

export const IconWrapper = styled(Box)(
  ({ climateColor }: { climateColor: string }) => ({
    background: `linear-gradient(135deg, ${climateColor}12, ${climateColor}05)`,
    borderRadius: theme.spacing(1),
    padding: "10px",
    border: `1px solid ${climateColor}30`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  })
);

export const PlanetCardContent = styled(CardContent)(() => ({
  flex: 1,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: "24px 16px",
}));
