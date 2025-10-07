import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { palette } from "../../../../theme/palette";
import { theme } from "../../../../theme/theme";

export const FooterWrapper = styled(Box)({
  backgroundColor: palette.branded.mainBg,
  width: "100%",
  height: theme.spacing(6),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
