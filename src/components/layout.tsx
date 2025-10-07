import React from "react";

import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import { useIsMobile } from "../../hooks/useDimensions";
import { MainContentWrapper, MainLayoutWrapper } from "./styles";
import { LayoutProps } from "./types";

const Layout: React.FC<LayoutProps> = (props) => {
  const isMobile = useIsMobile();
  return (
    <MainLayoutWrapper>
      <Header />

      <MainContentWrapper>{props.children}</MainContentWrapper>

      {!isMobile && <Footer />}
    </MainLayoutWrapper>
  );
};

export default Layout;
