import React from "react";
import { CommonContainerProps } from "./types";
import { MainContainerWrapper } from "./styles";
import { useIsMobile } from "../../../hooks/useDimensions";

const MainContainer = ({ children }: CommonContainerProps) => {
  const isMobile = useIsMobile();
  return (
    <MainContainerWrapper isMobile={isMobile}>{children}</MainContainerWrapper>
  );
};

export default MainContainer;
