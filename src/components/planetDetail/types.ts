import { PlanetWithFilms, Resident } from "../../../types/planets";

export interface PlanetDetailHeaderProps {
  isMobile: boolean;
  planetName: string;
  climateColor: string;
}

export interface StatRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  climateColor: string;
}

export interface PlanetStatsProps {
  data: PlanetWithFilms;
  climateColor: string;
}

export interface ResidentInfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  climateColor: string;
}

export interface PlanetResidentsProps {
  data: PlanetWithFilms | undefined;
  climateColor: string;
  isMobile: boolean;
}

export interface PlanetDetailProps {
  data: PlanetWithFilms | undefined;
  isLoading: boolean;
  error: Error | null;
}

export interface ResidentAdditionalInfoProps {
  resident: Resident;
  climateColor: string;
}
