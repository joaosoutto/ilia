import React from "react";
import { PlanetWithFilms } from "../../../../types/planets";
import { formatValue } from "@/utils/planets";
import TerrainOutlinedIcon from "@mui/icons-material/TerrainOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import StraightenOutlinedIcon from "@mui/icons-material/StraightenOutlined";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { PlanetStatsGrid, SectionTitle } from "../styles";
import { useIsMobile } from "../../../../hooks/useDimensions";
import StatRow from "./StatRow";
import { PlanetStatsProps } from "../types";

const PlanetStats = ({ data, climateColor }: PlanetStatsProps) => {
  const isMobile = useIsMobile();

  const statRows = [
    {
      icon: <AccessTimeOutlinedIcon sx={{ fontSize: 20 }} />,
      label: "Rotation Period",
      value: formatValue(data?.rotation_period, "hours"),
    },
    {
      icon: <SpeedOutlinedIcon sx={{ fontSize: 20 }} />,
      label: "Orbital Period",
      value: formatValue(data?.orbital_period, "days"),
    },
    {
      icon: <StraightenOutlinedIcon sx={{ fontSize: 20 }} />,
      label: "Diameter",
      value: formatValue(data?.diameter, "km"),
    },
    {
      icon: <WbSunnyOutlinedIcon sx={{ fontSize: 20 }} />,
      label: "Climate",
      value: data?.climate,
    },
    {
      icon: <ScaleOutlinedIcon sx={{ fontSize: 20 }} />,
      label: "Gravity",
      value: data?.gravity,
    },
    {
      icon: <TerrainOutlinedIcon sx={{ fontSize: 20 }} />,
      label: "Terrain",
      value: data?.terrain,
    },
    {
      icon: <PeopleOutlinedIcon sx={{ fontSize: 20 }} />,
      label: "Population",
      value: formatValue(data?.population),
    },
  ];

  return (
    <>
      <SectionTitle climateColor={climateColor}>Planet Stats</SectionTitle>
      <PlanetStatsGrid isMobile={isMobile}>
        {statRows.map((row) => (
          <StatRow
            key={row.label}
            icon={row.icon}
            label={row.label}
            value={row.value || ""}
            climateColor={climateColor}
          />
        ))}
      </PlanetStatsGrid>
    </>
  );
};

export default PlanetStats;
