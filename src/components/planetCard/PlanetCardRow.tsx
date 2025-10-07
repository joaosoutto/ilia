import { Box, Typography } from "@mui/material";
import { IconWrapper } from "./styles";
import { palette } from "../../../theme/palette";
import { PlanetCardRowProps } from "./types";

export const PlanetCardRow = ({
  icon,
  label,
  value,
  climateColor,
}: PlanetCardRowProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <IconWrapper climateColor={climateColor}>{icon}</IconWrapper>
      <Typography
        variant="subtitle2"
        style={{
          color: climateColor,
          fontWeight: "bold",
        }}
      >
        {label}:
        <Typography
          component="span"
          variant="subtitle2"
          sx={{
            color: palette.branded.black,
          }}
        >
          {" "}
          {value || ""}
        </Typography>{" "}
      </Typography>
    </Box>
  );
};
