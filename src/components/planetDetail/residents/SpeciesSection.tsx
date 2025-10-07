import React from "react";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import {
  SubsectionTitle,
  AdditionalInfoList,
  AdditionalInfoItem,
  AdditionalInfoName,
  AdditionalInfoDetails,
} from "../styles";
import { ResidentAdditionalInfoProps } from "../types";

const SpeciesSection = ({
  resident,
  climateColor,
}: ResidentAdditionalInfoProps) => {
  return (
    <>
      <SubsectionTitle climateColor={climateColor}>
        <CategoryOutlinedIcon sx={{ fontSize: 18, marginRight: 1 }} />
        Species
      </SubsectionTitle>
      <AdditionalInfoList>
        {!resident?.speciesDetails?.length && (
          <AdditionalInfoItem climateColor={climateColor}>
            <AdditionalInfoName climateColor={climateColor}>
              No species found
            </AdditionalInfoName>
          </AdditionalInfoItem>
        )}
        {resident?.speciesDetails?.map((species) => (
          <AdditionalInfoItem key={species?.url} climateColor={climateColor}>
            <AdditionalInfoName climateColor={climateColor}>
              {species?.name}
            </AdditionalInfoName>
            <AdditionalInfoDetails>
              {species?.classification} • {species?.designation}
            </AdditionalInfoDetails>
          </AdditionalInfoItem>
        ))}
      </AdditionalInfoList>
    </>
  );
};

export default SpeciesSection;
