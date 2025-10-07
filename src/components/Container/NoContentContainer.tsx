import React from "react";
import { CommonContainerProps } from "./types";
import { NoContentWrapper } from "./styles";

const NoContentContainer = ({ children }: CommonContainerProps) => {
  return <NoContentWrapper>{children}</NoContentWrapper>;
};

export default NoContentContainer;
