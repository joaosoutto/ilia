import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { StatLabel, StatValue } from "../styles";
import { ResidentInfoRowProps } from "../types";

const ResidentInfoRow = ({
  icon,
  label,
  value,
  climateColor,
}: ResidentInfoRowProps) => (
  <Box sx={{ borderBottom: `1px solid ${climateColor}50` }}>
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      sx={{ marginBottom: 0.5 }}
    >
      <Box sx={{ color: climateColor, display: "flex", alignItems: "center" }}>
        {icon}
      </Box>
      <StatLabel>{label}</StatLabel>
    </Stack>
    <StatValue climateColor={climateColor}>{value}</StatValue>
  </Box>
);

export default ResidentInfoRow;
