import React, { useState } from "react";
import MainContainer from "../Container/MainContainer";
import usePlanets from "../../../query/planets/usePlanets";
import { Button } from "@mui/material";
import { useDebounce } from "../../../hooks/useDebounce";
import SearchInput from "../searchInput";
import { DataGrid } from "../dataGrid";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  const { planetsResponse, isLoading, fetchPage, currentPage } = usePlanets({
    search: debouncedSearchTerm,
  });

  console.log(planetsResponse);
  // console.log(isLoading, isFetching, isPending);
  return (
    <MainContainer>
      <SearchInput
        placeholder="Search planets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e)}
        isLoading={isLoading}
      />
      <DataGrid results={planetsResponse?.results} />

      <Button onClick={() => fetchPage(currentPage + 1)}>Next</Button>
      <Button onClick={() => fetchPage(currentPage - 1)}>Previous</Button>
    </MainContainer>
  );
};

export default Home;
