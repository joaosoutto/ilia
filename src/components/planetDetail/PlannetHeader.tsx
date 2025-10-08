import React from "react";
import { getClimateBackground } from "@/utils/planets";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import {
  PlanetHeader,
  PlanetHeaderContent,
  PlanetHeaderIconWrapper,
  PlanetName,
} from "./styles";
import { PlanetDetailHeaderProps } from "./types";

const PlanetDetailHeader = ({
  isMobile,
  planetName,
  climateColor,
}: PlanetDetailHeaderProps) => {
  return (
    <PlanetHeader
      climateColor={climateColor}
      data-testid="planet-header"
      sx={{
        background: getClimateBackground(climateColor),
      }}
    >
      <PlanetHeaderContent data-testid="planet-header-content">
        <PlanetHeaderIconWrapper climateColor={climateColor} data-testid="planet-header-icon-wrapper">
          <PublicOutlinedIcon
            data-testid="PublicOutlinedIcon"
            sx={{
              color: climateColor,
              fontSize: isMobile ? "32px" : "48px",
            }}
          />
        </PlanetHeaderIconWrapper>{" "}
        <PlanetName isMobile={isMobile} climateColor={climateColor} data-testid="planet-name">
          {planetName}
        </PlanetName>
      </PlanetHeaderContent>
    </PlanetHeader>
  );
};

export default PlanetDetailHeader;
