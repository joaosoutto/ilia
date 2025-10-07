import React, { useState } from "react";
import MainContainer from "../Container/MainContainer";
import usePlanets from "../../../query/planets/usePlanets";
import Button from "@mui/material/Button";
import { useDebounce } from "../../../hooks/useDebounce";
import SearchInput from "../searchInput";
import { DataGrid } from "../dataGrid";
import { LoaderGrid } from "../dataGrid/LoaderGrid";
import NoResults from "../dataGrid/NoResults";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const { planetsResponse, isLoading, fetchPage, currentPage } = usePlanets({
    search: debouncedSearchTerm,
  });

  return (
    <MainContainer>
      <SearchInput
        placeholder="Search planets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e)}
        isLoading={isLoading}
      />

      {isLoading && <LoaderGrid />}

      {!isLoading &&
        planetsResponse?.results &&
        planetsResponse.results.length === 0 && <NoResults />}

      {!isLoading &&
        planetsResponse?.results &&
        planetsResponse.results.length > 0 && (
          <DataGrid results={planetsResponse.results} />
        )}

      <Button onClick={() => fetchPage(currentPage + 1)}>Next</Button>
      <Button onClick={() => fetchPage(currentPage - 1)}>Previous</Button>
    </MainContainer>
  );
};

export default Home;
