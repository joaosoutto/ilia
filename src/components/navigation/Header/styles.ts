import { styled, Toolbar, Box } from "@mui/material";
import { theme } from "../../../../theme/theme";

export const HeaderWrapper = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
}));

export const RouterSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  cursor: "pointer",
});
