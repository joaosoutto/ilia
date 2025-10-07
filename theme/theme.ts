import { createTheme as createMuiTheme } from "@mui/material";
import { palette } from "./palette";
import { typography } from "./typography";

export const theme = createMuiTheme({
  palette,
  typography,
});
