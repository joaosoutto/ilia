import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { palette } from "../../../theme/palette";
import { theme } from "../../../theme/theme";

export const MainLayoutWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxHeight: "100vh",
  height: "100vh",
  width: "100%",
  overflow: "hidden",
}));

export const MainContentWrapper = styled(Box)(
  ({ isMobile }: { isMobile: boolean }) => ({
    flex: 1,
    display: "flex",
    backgroundColor: palette.branded.lightBg,
    padding: isMobile
      ? theme.spacing(1)
      : `${theme.spacing(2)} ${theme.spacing(8)}`,
    overflow: "auto",
  })
);
