import { useState } from "react";

import { PlanetsListParams, PlanetsListResponseWithFilms } from "../../services/types";
import PlanetsApi from "../../services/planets";
import { QUERY_KEYS } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { PlanetWithFilms, Planet } from "../../types/planets";

const usePlanets = (params?: PlanetsListParams) => {
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPage = (number: number) => {
    setCurrentPage(number);
  };

  const query = useQuery<PlanetsListResponseWithFilms>({
    queryKey: [QUERY_KEYS.planets, params, currentPage],
    queryFn: async () => {
      const response = await PlanetsApi.getPlanets({
        ...(params || {}),
        page: currentPage,
      });

      // Fetch film details for each planet
      const planetsWithFilms = await Promise.all(
        response.data.results.map(async (planet: Planet) => {
          const filmDetails = await PlanetsApi.getFilmsDetails(planet.films);
          return {
            ...planet,
            filmDetails,
          } as PlanetWithFilms;
        })
      );

      // Return the complete response structure with enhanced planets
      return {
        count: response.data.count,
        next: response.data.next,
        previous: response.data.previous,
        results: planetsWithFilms,
      };
    },
  });

  return {
    planetsResponse: query.data,
    fetchPage,
    currentPage,
    ...query,
  };
};

export default usePlanets;
