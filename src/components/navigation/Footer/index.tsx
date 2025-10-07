import React from "react";
import { Typography } from "@mui/material";
import { palette } from "../../../../theme/palette";
import { FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Typography variant="subtitle2" color={palette.galactic.stars}>
        May the force be with you
      </Typography>
    </FooterWrapper>
  );
};

export default Footer;
