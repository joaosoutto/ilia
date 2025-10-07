import Stars from "../ui/stars/Stars";
import { LoaderContainer, SpinningPlanet, LoaderText } from "./styles";

const GridLoader = ({ detail = false }) => (
  <LoaderContainer>
    <SpinningPlanet />
    <LoaderText>Loading planet{detail ? " details" : "s"}...</LoaderText>
    <Stars count={10} isMobile={false} top={50} right={50} />
    <Stars count={25} isMobile={false} top={400} right={50} />
    <Stars count={30} isMobile={false} top={500} right={50} />
  </LoaderContainer>
);

export default GridLoader;
