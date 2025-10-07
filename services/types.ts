import { Planet } from "../types/planets";

export interface PlanetsListResponse {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}

export interface PlanetsListParams {
  page?: number;
  search?: string;
}
