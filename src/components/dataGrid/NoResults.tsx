import React from "react";
import { Typography } from "@mui/material";
import PublicOffIcon from "@mui/icons-material/PublicOff";
import { NoResultsWrapper, NoResultsIcon, NoResultsText } from "./styles";
import Stars from "../ui/stars/Stars";

const NoResults = () => (
  <NoResultsWrapper data-testid="no-results">
    <NoResultsIcon>
      <PublicOffIcon sx={{ fontSize: 64 }} />
    </NoResultsIcon>
    <NoResultsText>
      <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1 }}>
        No planets found
      </Typography>
      <Typography variant="body1" sx={{ opacity: 0.8 }}>
        Try adjusting your search or explore other galaxies
      </Typography>
    </NoResultsText>
    <Stars count={10} isMobile={false} top={50} right={500} />
    <Stars count={30} isMobile={false} top={500} right={500} />
  </NoResultsWrapper>
);

export default NoResults;
