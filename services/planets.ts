import axios from "axios";
import { BASE_API_URL } from "../contants/api";
import { PlanetsListParams } from "./types";
import { Film } from "../types/planets";

class PlanetsApi {
  static getPlanets(params?: PlanetsListParams) {
    return axios.get(`${BASE_API_URL}/planets`, { params });
  }

  static getPlanetDetails(id: string) {
    return axios.get(`${BASE_API_URL}/planets/${id}`);
  }

  static async getFilmDetails(filmUrl: string): Promise<Film> {
    const response = await axios.get(filmUrl);
    return response.data;
  }

  static async getFilmsDetails(filmUrls: string[]): Promise<Film[]> {
    const filmPromises = filmUrls.map(url => this.getFilmDetails(url));
    return Promise.all(filmPromises);
  }
}

export default PlanetsApi;
