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
      sx={{
        background: getClimateBackground(climateColor),
      }}
    >
      <PlanetHeaderContent>
        <PlanetHeaderIconWrapper climateColor={climateColor}>
          <PublicOutlinedIcon
            sx={{
              color: climateColor,
              fontSize: isMobile ? "32px" : "48px",
            }}
          />
        </PlanetHeaderIconWrapper>{" "}
        <PlanetName isMobile={isMobile} climateColor={climateColor}>
          {planetName}
        </PlanetName>
      </PlanetHeaderContent>
    </PlanetHeader>
  );
};

export default PlanetDetailHeader;
