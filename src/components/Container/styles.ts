import { styled, Stack, Container } from "@mui/material";
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
