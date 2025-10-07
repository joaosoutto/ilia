import { useRouter } from "next/router";
import usePlanetDetail from "../../../../query/planets/usePlanetDetail";
import { PlanetDetail } from "../../../components/planetDetail";
import PlanetDetailLayout from "../../../components/layouts/planets/detailLayout";

const PlanetPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = usePlanetDetail(
    router.isReady && id ? (id as string) : ""
  );

  return (
    <PlanetDetailLayout>
      <PlanetDetail data={data} isLoading={isLoading} error={error} />
    </PlanetDetailLayout>
  );
};

export default PlanetPage;
