import axios from "axios";
import { BASE_API_URL } from "../contants/api";
import { PlanetsListParams } from "./types";
import { Film, Resident, Species, Vehicle } from "../types/planets";

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
    const filmPromises = filmUrls.map((url) => this.getFilmDetails(url));
    return Promise.all(filmPromises);
  }

  static async getResidentDetails(residentUrl: string): Promise<Resident> {
    const response = await axios.get(residentUrl);
    return response.data;
  }

  static async getResidentsDetails(
    residentUrls: string[]
  ): Promise<Resident[]> {
    const residentPromises = residentUrls.map((url) =>
      this.getResidentDetails(url)
    );
    return Promise.all(residentPromises);
  }

  static async getSpeciesDetails(speciesUrl: string): Promise<Species> {
    const response = await axios.get(speciesUrl);
    return response.data;
  }

  static async getSpeciesDetailsList(
    speciesUrls: string[]
  ): Promise<Species[]> {
    const speciesPromises = speciesUrls.map((url) =>
      this.getSpeciesDetails(url)
    );
    return Promise.all(speciesPromises);
  }

  static async getVehicleDetails(vehicleUrl: string): Promise<Vehicle> {
    const response = await axios.get(vehicleUrl);
    return response.data;
  }

  static async getVehiclesDetailsList(
    vehicleUrls: string[]
  ): Promise<Vehicle[]> {
    const vehiclePromises = vehicleUrls.map((url) =>
      this.getVehicleDetails(url)
    );
    return Promise.all(vehiclePromises);
  }
}

export default PlanetsApi;
