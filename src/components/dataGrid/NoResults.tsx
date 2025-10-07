import React from "react";
import { Typography } from "@mui/material";
import PublicOffIcon from "@mui/icons-material/PublicOff";
import { NoResultsWrapper } from "./styles";

const NoResults = () => (
  <NoResultsWrapper>
    <PublicOffIcon sx={{ fontSize: 42 }} />
    <Typography variant="h6">No planets found</Typography>
  </NoResultsWrapper>
);

export default NoResults;
