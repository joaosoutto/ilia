import Box from "@mui/material/Box";
import { DataGridProps } from "./types";

import { PlanetCard } from "../planetCard";

export const DataGrid = ({ results }: DataGridProps) => {
  return (
    <Box
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "20px",
        // border: `1px solid ${palette.primary.main}`,
      }}
    >
      {results?.map((result) => {
        return <PlanetCard key={result.name} result={result} />;
      })}
    </Box>
  );
};
