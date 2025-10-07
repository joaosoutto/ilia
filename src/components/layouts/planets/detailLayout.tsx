import React from "react";

import { LayoutProps } from "../types";
import { PlanetDetailContentWrapper } from "./styles";

const PlanetDetailLayout: React.FC<LayoutProps> = ({ children }) => (
  <PlanetDetailContentWrapper>{children}</PlanetDetailContentWrapper>
);

export default PlanetDetailLayout;
