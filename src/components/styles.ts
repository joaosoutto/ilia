import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { palette } from "../../theme/palette";
import { theme } from "../../theme/theme";

export const MainLayoutWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxHeight: "100vh",
  height: "100vh",
  width: "100%",
  backgroundColor: palette.branded.darkGray,
  overflow: "hidden",
}));

export const MainContentWrapper = styled(Box)(() => ({
  flex: 1,
  display: "flex",
  backgroundColor: palette.branded.lightBg,
  padding: theme.spacing(2),
  overflow: "auto",
}));
