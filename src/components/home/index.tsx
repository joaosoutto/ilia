import React, { useEffect, useState } from "react";
import MainContainer from "../Container/MainContainer";
import usePlanets from "../../../query/planets/usePlanets";
import { useDebounce } from "../../../hooks/useDebounce";
import SearchInput from "../searchInput";
import { DataGrid } from "../dataGrid";
import Pagination from "../pagination";
import { PlanetWithFilms } from "../../../types/planets";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const { planetsResponse, isLoading, fetchPage, currentPage } = usePlanets({
    search: debouncedSearchTerm,
  });

  useEffect(() => {
    fetchPage(1);
  }, [debouncedSearchTerm]);

  return (
    <MainContainer>
      <SearchInput
        placeholder="Search planets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e)}
        isLoading={isLoading}
      />

      <DataGrid
        results={
          planetsResponse?.results?.sort(
            (a: PlanetWithFilms, b: PlanetWithFilms) =>
              a.name.localeCompare(b.name)
          ) || []
        }
        isLoading={isLoading}
      />

      <Pagination
        currentPage={currentPage}
        totalItems={planetsResponse?.count || 0}
        itemsPerPage={10}
        onPageChange={fetchPage}
        isLoading={isLoading}
      />
    </MainContainer>
  );
};

export default Home;
