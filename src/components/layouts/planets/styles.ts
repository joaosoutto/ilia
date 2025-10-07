import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { palette } from "../../../../theme/palette";
import { theme } from "../../../../theme/theme";

export const PlanetDetailContentWrapper = styled(Box)(
  ({ isMobile }: { isMobile: boolean }) => ({
    flex: 1,
    display: "flex",
    background: `linear-gradient(190deg, ${palette.galactic.space} 70%, ${palette.galactic.nebula} 100%)`,
    overflow: "auto",
    width: "100%",
    height: "100%",
  })
);
