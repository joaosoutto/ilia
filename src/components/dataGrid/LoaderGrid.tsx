import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { PlanetCardWrapper } from "../planetCard/styles";
import { palette } from "../../../theme/palette";
import { LoaderGridWrapper } from "./styles";

const LoaderCardRow = () => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
    <Skeleton variant="rounded" width={24} height={24} />
    <Skeleton variant="text" width="80%" height={28} />
  </Box>
);

const LoaderCard = () => {
  return (
    <PlanetCardWrapper
      climateColor={palette.primary[50]}
      sx={{ backgroundColor: palette.primary[50] }}
    >
      <Stack style={{ padding: "16px" }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Skeleton variant="text" width="80%" height={42} />
          <Skeleton variant="circular" width={32} height={32} />
        </Box>
        <Box mt={4}>
          <Stack spacing={4}>
            <LoaderCardRow />
            <LoaderCardRow />
            <LoaderCardRow />
          </Stack>
        </Box>
      </Stack>
    </PlanetCardWrapper>
  );
};

export const LoaderGrid = () => {
  return (
    <LoaderGridWrapper>
      {Array.from({ length: 10 }).map((_, index) => (
        <LoaderCard key={index} />
      ))}
    </LoaderGridWrapper>
  );
};
