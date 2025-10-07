import {
  Grid,
  Card,
  Box,
  Typography,
  Chip,
  Stack,
  Avatar,
} from "@mui/material";
import { Planet } from "../../../types/planets";
import { DataGridProps } from "./types";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import TerrainIcon from "@mui/icons-material/Terrain";
import StraightenIcon from "@mui/icons-material/Straighten";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import StarIcon from "@mui/icons-material/Star";
import SatelliteIcon from "@mui/icons-material/Satellite";
import { getClimateColor } from "@/utils/planets";
import { palette } from "../../../theme/palette";
import { PlanetCard } from "../planetCard";

export const DataGrid = ({ results }: DataGridProps) => {
  return (
    <Box
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "20px",
        // border: `1px solid ${palette.primary.main}`,
      }}
    >
      {results?.map((result) => {
        return <PlanetCard key={result.name} result={result} />;
      })}
    </Box>
  );
};
