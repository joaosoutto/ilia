import { PlanetClimate } from "../../contants/planets";

export function getClimateColor(climate: string): string {
  switch (climate) {
    case PlanetClimate.ARID:
      return "#EDC988";
    case PlanetClimate.TEMPERATE:
      return "#88B04B";
    case "frozen":
      return "#0066CC";
    case PlanetClimate.MURKY:
      return "#8B4513";
    case PlanetClimate.HOT:
      return "#FF5733";
    case PlanetClimate.TROPICAL:
      return "#29B6F6";
    case PlanetClimate.POLLUTED:
      return "#FF6B35";
    case PlanetClimate.UNKNOWN:
      return "#BDBDBD";
    case PlanetClimate.SUPERHEATED:
      return "#FF1744";
    case PlanetClimate.FROZEN:
      return "#0066CC";
    default:
      return "#88B04B";
  }
}

export const getClimateBackground = (color: string) => {
  return `
            radial-gradient(circle at 30% 20%, ${color}10 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, ${color}10 0%, transparent 60%),
            linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f1f3f4 100%)
          `;
};
