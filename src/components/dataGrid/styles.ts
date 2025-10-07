import { Box, styled } from "@mui/material";
import { theme } from "../../../theme/theme";

export const LoaderGridWrapper = styled(Box)(() => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "20px",
}));

export const NoResultsWrapper = styled(Box)(() => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
}));
