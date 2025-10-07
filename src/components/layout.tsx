import React from "react";

import { useIsMobile, useIsTablet } from "../../hooks/useDimensions";
import Header from "./navigation/Header";
import { MainContentWrapper, MainLayoutWrapper } from "./styles";
import { LayoutProps } from "./types";

const Layout: React.FC<LayoutProps> = (props) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const isSmallScreen = isMobile || isTablet;

  return (
    <MainLayoutWrapper>
      <Header />

      <MainContentWrapper isMobile={isSmallScreen}>
        {props.children}
      </MainContentWrapper>
    </MainLayoutWrapper>
  );
};

export default Layout;
