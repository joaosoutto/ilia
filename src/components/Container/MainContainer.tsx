import React from "react";
import { CommonContainerProps } from "./types";
import { useIsMobile } from "../../../hooks/useDimensions";
import { MainContainerWrapper } from "./styles";

const MainContainer = ({ children }: CommonContainerProps) => {
  const isMobile = useIsMobile();
  return (
    <MainContainerWrapper isMobile={isMobile}>{children}</MainContainerWrapper>
  );
};

export default MainContainer;
