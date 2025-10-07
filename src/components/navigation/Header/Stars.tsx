import React from "react";
import Box from "@mui/material/Box";
import { palette } from "../../../../theme/palette";
import { StarsWrapper } from "./styles";

interface StarsProps {
  count?: number;
  isMobile?: boolean;
}

const Stars: React.FC<StarsProps> = ({ count = 40, isMobile = false }) => {
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 5 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const opacity = Math.random() * 0.6 + 0.4;

      stars.push(
        <Box
          key={i}
          sx={{
            position: "absolute",
            width: `${size}px`,
            height: `${size}px`,
            background: `radial-gradient(circle, ${palette.galactic.stars} 0%, ${palette.galactic.stars}80 70%, transparent 100%)`,
            borderRadius: "50%",
            left: `${left}%`,
            top: `${top}%`,
            opacity,
          }}
        />
      );
    }
    return stars;
  };

  return <StarsWrapper isMobile={isMobile}>{generateStars()}</StarsWrapper>;
};

export default Stars;
