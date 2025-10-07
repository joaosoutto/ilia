import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { theme } from "../../../theme/theme";

export const NoContentWrapper = styled(Stack)(() => ({
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  gap: 0,
}));

export const MainContainerWrapper = styled(Stack)(
  ({ isMobile }: { isMobile: boolean }) => ({
    flex: 1,
    width: "100%",
    minWidth: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: isMobile ? theme.spacing(1) : theme.spacing(2),
    padding: isMobile ? theme.spacing(0) : theme.spacing(2, 0),
    // border: "3px solid purple",
  })
);
