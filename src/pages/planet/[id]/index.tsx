import { useParams } from "next/navigation";
import usePlanetDetail from "../../../../query/planets/usePlanetDetail";

const PlanetPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = usePlanetDetail(id as string);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading planet</div>;
  if (!data) return <div>Planet not found</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>Climate: {data.climate}</p>
      <p>Terrain: {data.terrain}</p>
      <p>Population: {data.population}</p>

      {/* Films Section */}
      {data.filmDetails && data.filmDetails.length > 0 && (
        <div>
          <h2>Films ({data.filmDetails.length})</h2>
          <ul>
            {data.filmDetails.map((film) => (
              <li key={film.url}>
                <strong>{film.title}</strong> (Episode {film.episode_id}) -{" "}
                {film.director}
              </li>
            ))}
          </ul>
        </div>
      )}

        {/* Residents Section */}
        {data.residentDetails && data.residentDetails.length > 0 && (
          <div>
            <h2>Residents ({data.residentDetails.length})</h2>
            {data.residentDetails.map((resident) => (
              <div key={resident.url} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "10px" }}>
                <h3>{resident.name}</h3>
                <p><strong>Gender:</strong> {resident.gender}</p>
                <p><strong>Birth Year:</strong> {resident.birth_year}</p>
                <p><strong>Height:</strong> {resident.height}cm</p>
                <p><strong>Mass:</strong> {resident.mass}kg</p>
                <p><strong>Hair Color:</strong> {resident.hair_color}</p>
                <p><strong>Skin Color:</strong> {resident.skin_color}</p>
                <p><strong>Eye Color:</strong> {resident.eye_color}</p>
                
                {/* Species Section */}
                {resident.speciesDetails && resident.speciesDetails.length > 0 && (
                  <div>
                    <h4>Species:</h4>
                    <ul>
                      {resident.speciesDetails.map((species) => (
                        <li key={species.url}>
                          <strong>{species.name}</strong> - {species.classification} ({species.designation})
                          <br />
                          <small>Language: {species.language}, Average Height: {species.average_height}cm</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Vehicles Section */}
                {resident.vehicleDetails && resident.vehicleDetails.length > 0 && (
                  <div>
                    <h4>Vehicles:</h4>
                    <ul>
                      {resident.vehicleDetails.map((vehicle) => (
                        <li key={vehicle.url}>
                          <strong>{vehicle.name}</strong> - {vehicle.model}
                          <br />
                          <small>Manufacturer: {vehicle.manufacturer}, Class: {vehicle.vehicle_class}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default PlanetPage;
