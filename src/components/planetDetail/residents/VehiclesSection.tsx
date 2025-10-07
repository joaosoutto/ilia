import React from "react";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import {
  SubsectionTitle,
  AdditionalInfoList,
  AdditionalInfoItem,
  AdditionalInfoName,
  AdditionalInfoDetails,
} from "../styles";
import { ResidentAdditionalInfoProps } from "../types";

const VehiclesSection = ({
  resident,
  climateColor,
}: ResidentAdditionalInfoProps) => {
  return (
    <>
      <SubsectionTitle climateColor={climateColor}>
        <DirectionsCarOutlinedIcon sx={{ fontSize: 18, marginRight: 1 }} />
        Vehicles
      </SubsectionTitle>
      <AdditionalInfoList>
        {!resident?.vehicleDetails?.length && (
          <AdditionalInfoItem climateColor={climateColor}>
            <AdditionalInfoName climateColor={climateColor}>
              No vehicles found
            </AdditionalInfoName>
          </AdditionalInfoItem>
        )}
        {resident.vehicleDetails?.map((vehicle) => (
          <AdditionalInfoItem key={vehicle?.url} climateColor={climateColor}>
            <AdditionalInfoName climateColor={climateColor}>
              {vehicle?.name}
            </AdditionalInfoName>
            <AdditionalInfoDetails>{vehicle?.model}</AdditionalInfoDetails>
          </AdditionalInfoItem>
        ))}
      </AdditionalInfoList>
    </>
  );
};

export default VehiclesSection;
