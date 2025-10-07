import React from "react";
import { getClimateColor } from "@/utils/planets";
import { PlanetDetailContainer, HandlerContainer } from "./styles";
import PlanetDetailHeader from "./PlannetHeader";
import { useIsMobile } from "../../../hooks/useDimensions";
import PlanetStats from "./stats/PlanetStats";
import PlanetResidents from "./residents/PlanetResidents";
import { PlanetDetailProps } from "./types";
import GridLoader from "../dataGrid/GridLoader";
import { Typography } from "@mui/material";

export const PlanetDetail = ({ data, isLoading }: PlanetDetailProps) => {
  const isMobile = useIsMobile();

  const primaryClimate = data?.climate?.split(",")[0].trim();
  const climateColor = getClimateColor(primaryClimate || "");

  if (isLoading) {
    return (
      <HandlerContainer>
        <GridLoader detail />
      </HandlerContainer>
    );
  }

  if (!data) {
    return (
      <HandlerContainer>
        <Typography variant="h6">Planet not found</Typography>
      </HandlerContainer>
    );
  }

  return (
    <PlanetDetailContainer isMobile={isMobile}>
      <PlanetDetailHeader
        isMobile={isMobile}
        planetName={data?.name}
        climateColor={climateColor}
      />

      <PlanetStats data={data} climateColor={climateColor} />

      <PlanetResidents
        data={data}
        climateColor={climateColor}
        isMobile={isMobile}
      />
    </PlanetDetailContainer>
  );
};
