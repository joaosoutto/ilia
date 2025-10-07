import React from "react";

import { StarsProps } from "./types";
import { StarsContainer, StarsWrapper } from "./styles";

const Stars = ({
  count = 40,
  isMobile = false,
  top = 0,
  right = 0,
}: StarsProps) => {
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 5 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const opacity = Math.random() * 0.6 + 0.4;
      const animationDelay = Math.random() * 3; // Random delay for staggered animations
      const animationDuration = Math.random() * 2 + 1; // Random duration between 1-3 seconds

      stars.push(
        <StarsContainer
          key={i}
          size={size}
          left={left}
          top={top}
          opacity={opacity}
          animationDuration={animationDuration}
          animationDelay={animationDelay}
        />
      );
    }
    return stars;
  };

  return (
    <StarsWrapper top={top} right={right} isMobile={isMobile}>
      {generateStars()}
    </StarsWrapper>
  );
};

export default Stars;
