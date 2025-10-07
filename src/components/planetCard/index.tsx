import { Box, CardContent, Stack } from "@mui/material";
import { Planet } from "../../../types/planets";
import { getClimateBackground, getClimateColor } from "@/utils/planets";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import TerrainIcon from "@mui/icons-material/Terrain";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SatelliteIcon from "@mui/icons-material/Satellite";
import {
  PlanetCardContainer,
  PlanetCardName,
  PlanetCardWrapper,
} from "./styles";
import { PlanetCardRow } from "./PlanetCardRow";

export const PlanetCard = ({ result }: { result: Planet }) => {
  const primaryClimate = result.climate.split(",")[0].trim();
  const climateColor = getClimateColor(primaryClimate);

  const IconStyles = {
    color: climateColor,
    fontSize: "18px",
  };

  return (
    <PlanetCardWrapper
      key={result.name}
      climateColor={climateColor}
      sx={{
        background: getClimateBackground(climateColor),
      }}
    >
      <CardContent>
        <PlanetCardContainer climateColor={climateColor}>
          <PublicOutlinedIcon
            sx={{
              color: climateColor,
              fontSize: "28px",
            }}
          />
        </PlanetCardContainer>
        <Box sx={{ marginBottom: "16px", position: "relative", zIndex: 2 }}>
          <PlanetCardName variant="h6" climateColor={climateColor}>
            {result.name}
          </PlanetCardName>
        </Box>

        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Stack spacing={2}>
            <PlanetCardRow
              icon={<TerrainIcon sx={IconStyles} />}
              label="Terrain"
              value={result.terrain}
              climateColor={climateColor}
            />
            <PlanetCardRow
              icon={<SatelliteIcon sx={IconStyles} />}
              label="Diameter"
              value={
                result.diameter === "unknown"
                  ? "Unknown"
                  : `${Number(result.diameter).toLocaleString()} km`
              }
              climateColor={climateColor}
            />

            <PlanetCardRow
              icon={<WbSunnyIcon sx={IconStyles} />}
              label="Climate"
              value={result.climate}
              climateColor={climateColor}
            />
          </Stack>
        </Box>
      </CardContent>
    </PlanetCardWrapper>
  );
};
