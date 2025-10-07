import { PlanetClimate } from "../../contants/planets";
import { palette } from "../../theme/palette";

export function getClimateColor(climate: string): string {
  switch (climate) {
    case PlanetClimate.ARID:
      return palette.climates.arid;
    case PlanetClimate.TEMPERATE:
      return palette.climates.temperate;
    case "frozen":
      return palette.climates.frozen;
    case PlanetClimate.MURKY:
      return palette.climates.murky;
    case PlanetClimate.HOT:
      return palette.climates.hot;
    case PlanetClimate.TROPICAL:
      return palette.climates.tropical;
    case PlanetClimate.POLLUTED:
      return palette.climates.polluted;
    case PlanetClimate.UNKNOWN:
      return palette.climates.unknown;
    case PlanetClimate.SUPERHEATED:
      return palette.climates.superheated;
    case PlanetClimate.FROZEN:
      return palette.climates.frozen;
    default:
      return palette.climates.temperate;
  }
}

export const getClimateBackground = (color: string) => {
  return `
            radial-gradient(circle at 30% 20%, ${color}10 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, ${color}10 0%, transparent 60%),
            linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f1f3f4 100%)
          `;
};

export const extractId = (url: string) => {
  const id = url?.replace(/\/$/, "").split("/").pop();
  return id;
};

export const formatValue = (value: string | undefined, unit?: string) => {
  if (value === "unknown" || value === "N/A") return "Unknown";
  if (unit) return `${Number(value).toLocaleString()} ${unit}`;
  return value;
};
