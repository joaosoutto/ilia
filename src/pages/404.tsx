import React from "react";
import { Typography } from "@mui/material";
import { palette } from "../../theme/palette";
import { NotFound as NotFoundIcon } from "@/assets/svgs/NotFound";
import NoContentContainer from "@/components/Container/NoContentContainer";
import { useIsMobile } from "../../hooks/useDimensions";

const NotFoundPage = () => {
  const isMobile = useIsMobile();
  return (
    <NoContentContainer>
      <NotFoundIcon
        width={isMobile ? "240px" : "320px"}
        height={isMobile ? "240px" : "320px"}
        color={palette.galactic.space}
      />
      <Typography
        textAlign="center"
        variant={isMobile ? "h6" : "h5"}
        color={palette.galactic.space}
      >
        To the home page, return you must, young Padawan.
      </Typography>
    </NoContentContainer>
  );
};

export default NotFoundPage;
