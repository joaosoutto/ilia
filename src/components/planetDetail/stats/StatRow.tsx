import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { StatCard, StatCardContent, StatLabel, StatValue } from "../styles";
import { StatRowProps } from "../types";

const StatRow = ({ icon, label, value, climateColor }: StatRowProps) => (
  <StatCard climateColor={climateColor} data-testid="stat-card">
    <StatCardContent data-testid="stat-card-content">
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          sx={{ color: climateColor, display: "flex", alignItems: "center" }}
        >
          {icon}
        </Box>
        <Box>
          <StatLabel>{label}</StatLabel>
          <StatValue climateColor={climateColor} data-testid="stat-value">{value}</StatValue>
        </Box>
      </Stack>
    </StatCardContent>
  </StatCard>
);

export default StatRow;
