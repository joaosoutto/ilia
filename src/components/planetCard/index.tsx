import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { PlanetWithFilms } from "../../../types/planets";
import {
  extractId,
  getClimateBackground,
  getClimateColor,
} from "@/utils/planets";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import TerrainOutlinedIcon from "@mui/icons-material/TerrainOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import {
  PlanetCardContainer,
  PlanetCardContent,
  PlanetCardName,
  PlanetCardWrapper,
} from "./styles";
import { PlanetCardRow } from "./PlanetCardRow";
import { useRouter } from "next/navigation";

export const PlanetCard = ({ result }: { result: PlanetWithFilms }) => {
  const router = useRouter();
  const primaryClimate = result.climate.split(",")[0].trim();
  const climateColor = getClimateColor(primaryClimate);

  const IconStyles = {
    color: climateColor,
    fontSize: "18px",
  };

  const cardItems = [
    {
      icon: <TerrainOutlinedIcon sx={IconStyles} />,
      label: "Terrain",
      value: result?.terrain,
    },
    {
      icon: <StraightenOutlinedIcon sx={IconStyles} />,
      label: "Diameter",
      value:
        result?.diameter === "unknown"
          ? "unknown"
          : `${Number(result.diameter).toLocaleString()} km`,
    },

    {
      icon: <WbSunnyOutlinedIcon sx={IconStyles} />,
      label: "Climate",
      value: result?.climate,
    },

    {
      icon: <MovieCreationOutlinedIcon sx={IconStyles} />,
      label: "Movies",
      value:
        result?.filmDetails && result?.filmDetails?.length > 0
          ? `${result?.filmDetails[0]?.title || "Unknown"}${
              result?.filmDetails?.length > 1
                ? ` + ${result?.filmDetails?.length - 1} more`
                : ""
            }`
          : "none",
    },
  ];

  return (
    <PlanetCardWrapper
      key={result.name}
      data-testid="planet-card"
      climateColor={climateColor}
      sx={{
        background: getClimateBackground(climateColor),
      }}
      onClick={() => {
        router.push(`/planet/${extractId(result?.url)}`);
      }}
    >
      <PlanetCardContent>
        <PlanetCardContainer climateColor={climateColor}>
          <PublicOutlinedIcon
            data-testid="planet-icon"
            sx={{
              color: climateColor,
              fontSize: "32px",
            }}
          />
        </PlanetCardContainer>
        <Box sx={{ marginBottom: "16px", position: "relative", zIndex: 2 }}>
          <PlanetCardName variant="h6" climateColor={climateColor}>
            {result.name}
          </PlanetCardName>
        </Box>

        <Stack spacing={1}>
          {cardItems.map((item) => (
            <PlanetCardRow
              key={item.label}
              icon={item.icon}
              label={item.label}
              value={item.value || ""}
              climateColor={climateColor}
            />
          ))}
        </Stack>
      </PlanetCardContent>
    </PlanetCardWrapper>
  );
};
