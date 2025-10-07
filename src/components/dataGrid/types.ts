import { PlanetWithFilms } from "../../../types/planets";

export interface DataGridProps {
  results: PlanetWithFilms[] | undefined;
  isLoading: boolean;
}
