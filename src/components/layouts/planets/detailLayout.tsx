import React from "react";

import { useIsMobile, useIsTablet } from "../../../../hooks/useDimensions";
import { Box } from "@mui/material";
import { LayoutProps } from "../types";
import { PlanetDetailContentWrapper } from "./styles";

const PlanetDetailLayout: React.FC<LayoutProps> = ({ children }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isSmallScreen = isMobile || isTablet;

  return (
    <PlanetDetailContentWrapper isMobile={isSmallScreen}>
      {children}
    </PlanetDetailContentWrapper>
  );
};

export default PlanetDetailLayout;
