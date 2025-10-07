import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { PlanetsListParams, PlanetsListResponse } from "../../services/types";
import PlanetsApi from "../../services/planets";
import { QUERY_KEYS } from "../constants";
import { AxiosResponse } from "axios";
import { Planet } from "../../types/planets";

const usePlanets = (params?: PlanetsListParams) => {
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPage = (number: number) => {
    setCurrentPage(number);
  };

  const query = useQuery<
    AxiosResponse<PlanetsListResponse>,
    unknown,
    AxiosResponse<PlanetsListResponse>
  >({
    queryKey: [QUERY_KEYS.planets, params, currentPage],
    queryFn: async () =>
      PlanetsApi.getPlanets({
        ...(params || {}),
        page: currentPage,
      }),
  });
  return {
    planetsResponse: query.data?.data,
    fetchPage,
    currentPage,
    ...query,
  };
};

export default usePlanets;
