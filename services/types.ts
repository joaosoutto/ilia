import { Planet, PlanetWithFilms } from "../types/planets";

export interface PlanetsListResponse {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}

export interface PlanetsListResponseWithFilms {
  count: number;
  next: string;
  previous: string;
  results: PlanetWithFilms[];
}

export interface PlanetsListParams {
  page?: number;
  search?: string;
}
