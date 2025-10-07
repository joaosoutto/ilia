import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { Planet } from "../../../types/planets";
import { getClimateBackground, getClimateColor } from "@/utils/planets";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import TerrainOutlinedIcon from "@mui/icons-material/TerrainOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SatelliteAltOutlinedIcon from "@mui/icons-material/SatelliteAltOutlined";
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
              icon={<TerrainOutlinedIcon sx={IconStyles} />}
              label="Terrain"
              value={result.terrain}
              climateColor={climateColor}
            />
            <PlanetCardRow
              icon={<SatelliteAltOutlinedIcon sx={IconStyles} />}
              label="Diameter"
              value={
                result.diameter === "unknown"
                  ? "Unknown"
                  : `${Number(result.diameter).toLocaleString()} km`
              }
              climateColor={climateColor}
            />

            <PlanetCardRow
              icon={<WbSunnyOutlinedIcon sx={IconStyles} />}
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
