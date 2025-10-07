import axios from "axios";
import { BASE_API_URL } from "../contants/api";
import { PlanetsListParams } from "./types";

class PlanetsApi {
  static getPlanets(params?: PlanetsListParams) {
    return axios.get(`${BASE_API_URL}/planets`, { params });
  }

  static getPlanetDetails(id: string) {
    return axios.get(`${BASE_API_URL}/planets/${id}`);
  }
}

export default PlanetsApi;
