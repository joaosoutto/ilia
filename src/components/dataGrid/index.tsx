import { DataGridProps } from "./types";

import { PlanetCard } from "../planetCard";
import { DataGridWrapper } from "./styles";
import NoResults from "./NoResults";
import GridLoader from "./GridLoader";
import { useIsMobile, useIsTablet } from "../../../hooks/useDimensions";

export const DataGrid = ({ results, isLoading }: DataGridProps) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const isSmallScreen = isMobile || isTablet;

  if (isLoading) {
    return <GridLoader />;
  }

  if (!isLoading && results?.length === 0) {
    return <NoResults />;
  }

  return (
    <DataGridWrapper isMobile={isSmallScreen}>
      {results?.map((result) => {
        return <PlanetCard key={result.name} result={result} />;
      })}
    </DataGridWrapper>
  );
};
