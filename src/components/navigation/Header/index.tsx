import React from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { palette } from "../../../../theme/palette";
import { useIsMobile } from "../../../../hooks/useDimensions";
import DarthVaderIcon from "@/assets/svgs/DarthVaderIcon";
import { HeaderWrapper, RouterSection } from "./styles";
import { useRouter } from "next/navigation";
import { theme } from "../../../../theme/theme";
import Stars from "../../ui/stars/Stars";

const Header = () => {
  const isMobile = useIsMobile();
  const router = useRouter();
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: `linear-gradient(135deg, ${palette.galactic.space} 50%, ${palette.galactic.nebula} 100%)`,
        padding: theme.spacing(1),
      }}
    >
      <HeaderWrapper>
        <RouterSection onClick={() => router.push("/")}>
          <DarthVaderIcon
            width={isMobile ? "34px" : "42px"}
            height={isMobile ? "34px" : "42px"}
            color={palette.galactic.stars}
          />
          <Typography
            variant="h5"
            fontWeight={600}
            color={palette.galactic.stars}
          >
            SW Planets
          </Typography>
        </RouterSection>
        <Stars count={isMobile ? 20 : 40} isMobile={isMobile} />
      </HeaderWrapper>
    </AppBar>
  );
};

export default Header;
