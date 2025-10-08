import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { PlanetWithFilms } from "../types/planets";

const testTheme = createTheme();

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={testTheme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// Mock data
export const mockPlanet: PlanetWithFilms = {
  name: "Tatooine",
  rotation_period: "23",
  orbital_period: "304",
  diameter: "10465",
  climate: "arid",
  gravity: "1 standard",
  terrain: "desert",
  population: "200000",
  surface_water: "1",
  films: ["https://swapi.dev/api/films/1/", "https://swapi.dev/api/films/3/"],
  residents: [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/people/2/",
  ],
  created: "2014-12-09T13:50:49.641000Z",
  edited: "2014-12-20T20:58:18.411000Z",
  url: "https://swapi.dev/api/planets/1/",
  filmDetails: [
    {
      title: "A New Hope",
      episode_id: 4,
      opening_crawl: "It is a period of civil war...",
      director: "George Lucas",
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1977-05-25",
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: [],
      created: "2014-12-10T14:23:31.880000Z",
      edited: "2014-12-20T19:49:45.256000Z",
      url: "https://swapi.dev/api/films/1/",
    },
  ],
};

export const mockPlanets: PlanetWithFilms[] = [
  mockPlanet,
  {
    ...mockPlanet,
    name: "Alderaan",
    climate: "temperate",
    terrain: "grasslands, mountains",
    diameter: "12500",
    url: "https://swapi.dev/api/planets/2/",
  },
];

export * from "@testing-library/react";
export { customRender as render };
