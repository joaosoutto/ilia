import React from "react";
import { Box } from "@mui/material";
import { palette } from "../../../../theme/palette";

interface StarsProps {
  count?: number;
  isMobile?: boolean;
}

const Stars: React.FC<StarsProps> = ({ count = 40, isMobile = false }) => {
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 4 + 1; // Random size between 1-5px
      const left = Math.random() * 100; // Random horizontal position
      const top = Math.random() * 100; // Random vertical position
      const opacity = Math.random() * 0.6 + 0.4; // Random opacity between 0.4-1
      
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

  return (
    <Box
      sx={{
        position: "relative",
        width: isMobile ? "30vw" : "50vw",
        height: "60px",
        overflow: "hidden",
      }}
    >
      {generateStars()}
    </Box>
  );
};

export default Stars;
