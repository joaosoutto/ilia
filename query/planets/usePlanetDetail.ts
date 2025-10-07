import { useQuery } from "@tanstack/react-query";
import { PlanetWithFilms, ResidentWithDetails } from "../../types/planets";
import PlanetsApi from "../../services/planets";
import { QUERY_KEYS } from "../constants";

const usePlanetDetail = (id: string) => {
  const { data, isLoading, error } = useQuery<PlanetWithFilms>({
    queryKey: [QUERY_KEYS.planetDetail, id],
    queryFn: async () => {
      const response = await PlanetsApi.getPlanetDetails(id);
      
      // Fetch film details
      const filmDetails = await PlanetsApi.getFilmsDetails(response.data.films);
      
      // Fetch resident details with their species and vehicles
      const residentsWithDetails = await Promise.all(
        response.data.residents.map(async (residentUrl: string) => {
          const resident = await PlanetsApi.getResidentDetails(residentUrl);
          
          // Fetch species and vehicle details for this resident
          const [speciesDetails, vehicleDetails] = await Promise.all([
            resident.species.length > 0 
              ? PlanetsApi.getSpeciesDetailsList(resident.species)
              : Promise.resolve([]),
            resident.vehicles.length > 0 
              ? PlanetsApi.getVehiclesDetailsList(resident.vehicles)
              : Promise.resolve([]),
          ]);
          
          return {
            ...resident,
            speciesDetails,
            vehicleDetails,
          } as ResidentWithDetails;
        })
      );
      
      return {
        ...response.data,
        filmDetails,
        residentDetails: residentsWithDetails,
      } as PlanetWithFilms;
    },
    enabled: !!id,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default usePlanetDetail;
