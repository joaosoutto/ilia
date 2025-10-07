import React from "react";
import { useRouter } from "next/router";

import { useIsMobile, useIsTablet } from "../../../hooks/useDimensions";
import Header from "../navigation/Header";
import { MainContentWrapper, MainLayoutWrapper } from "./styles";
import { LayoutProps } from "./types";

const Layout: React.FC<LayoutProps> = (props) => {
  const router = useRouter();
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const isSmallScreen = isMobile || isTablet;

  // Check if we're on a planet detail page
  const isPlanetPage = router.pathname.startsWith("/planet/");

  return (
    <MainLayoutWrapper>
      <Header />

      {isPlanetPage ? (
        props.children
      ) : (
        <MainContentWrapper isMobile={isSmallScreen}>
          {props.children}
        </MainContentWrapper>
      )}
    </MainLayoutWrapper>
  );
};

export default Layout;
