import React from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import TransgenderOutlinedIcon from "@mui/icons-material/TransgenderOutlined";
import {
  SectionTitle,
  ResidentsGrid,
  ResidentCard,
  ResidentCardContent,
  ResidentName,
  ResidentInfoStack,
} from "../styles";
import ResidentInfoRow from "./ResidentInfoRow";
import { PlanetResidentsProps } from "../types";
import SpeciesSection from "./SpeciesSection";
import VehiclesSection from "./VehiclesSection";

const PlanetResidents = ({
  data,
  climateColor,
  isMobile,
}: PlanetResidentsProps) => {
  const residentRows = [
    {
      icon: <FaceOutlinedIcon sx={{ fontSize: 16 }} />,
      label: "Hair Color",
      value: data?.residentDetails?.[0]?.hair_color,
    },
    {
      icon: <VisibilityOutlinedIcon sx={{ fontSize: 16 }} />,
      label: "Eye Color",
      value: data?.residentDetails?.[0]?.eye_color,
    },
    {
      icon: <TransgenderOutlinedIcon sx={{ fontSize: 16 }} />,
      label: "Gender",
      value: data?.residentDetails?.[0]?.gender,
    },
  ];

  return (
    <>
      <SectionTitle climateColor={climateColor}>
        Residents ({data?.residentDetails?.length})
      </SectionTitle>
      <ResidentsGrid isMobile={isMobile}>
        {data?.residentDetails?.map((resident) => (
          <ResidentCard key={resident.url} climateColor={climateColor} data-testid="resident-card">
            <ResidentCardContent data-testid="resident-card-content">
              <ResidentName climateColor={climateColor}>
                {resident.name}
              </ResidentName>

              <ResidentInfoStack>
                {residentRows.map((row) => (
                  <ResidentInfoRow
                    key={row.label}
                    icon={row.icon}
                    label={row.label}
                    value={row.value || ""}
                    climateColor={climateColor}
                  />
                ))}
              </ResidentInfoStack>

              <SpeciesSection resident={resident} climateColor={climateColor} />

              <VehiclesSection
                resident={resident}
                climateColor={climateColor}
              />
            </ResidentCardContent>
          </ResidentCard>
        ))}
      </ResidentsGrid>
    </>
  );
};

export default PlanetResidents;
