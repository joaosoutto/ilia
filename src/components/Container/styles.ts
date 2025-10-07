import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { theme } from "../../../theme/theme";

export const NoContentWrapper = styled(Stack)(() => ({
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  gap: 0,
}));

export const MainContainerWrapper = styled(Container)(
  ({ isMobile }: { isMobile: boolean }) => ({
    flex: 1,
    width: "100%",
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: theme.spacing(2),
    maxHeight: "100%",
    height: "100%",
    border: "1px solid red",
  })
);
