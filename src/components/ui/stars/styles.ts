import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { StarsContainerProps, StarsWrapperProps } from "./types";
import { palette } from "../../../../theme/palette";

export const StarsWrapper = styled(Box)(
  ({ isMobile, top, right }: StarsWrapperProps) => ({
    position: "absolute",
    width: isMobile ? "30vw" : "70vw",
    height: "60px",
    overflow: "hidden",
    top: top,
    right: right,
  })
);

export const StarsContainer = styled(Box)(
  ({
    size,
    left,
    top,
    opacity,
    animationDuration,
    animationDelay,
  }: StarsContainerProps) => ({
    position: "absolute",
    width: `${size}px`,
    height: `${size}px`,
    background: `radial-gradient(circle, ${palette.galactic.stars} 0%, ${palette.galactic.stars}80 70%, transparent 100%)`,
    borderRadius: "50%",
    left: `${left}%`,
    top: `${top}%`,
    opacity,
    boxShadow: `0 0 ${size * 2}px ${palette.galactic.stars}40, 0 0 ${
      size * 4
    }px ${palette.galactic.stars}20`,
    animation: `twinkle ${animationDuration}s ease-in-out infinite alternate, pulse ${
      animationDuration * 1.5
    }s ease-in-out infinite`,
    animationDelay: `${animationDelay}s`,
    "@keyframes twinkle": {
      "0%": {
        opacity: opacity * 0.3,
        transform: "scale(0.8)",
      },
      "100%": {
        opacity: opacity,
        transform: "scale(1.2)",
      },
    },
    "@keyframes pulse": {
      "0%, 100%": {
        boxShadow: `0 0 ${size * 2}px ${palette.galactic.stars}40, 0 0 ${
          size * 4
        }px ${palette.galactic.stars}20`,
      },
      "50%": {
        boxShadow: `0 0 ${size * 3}px ${palette.galactic.stars}60, 0 0 ${
          size * 6
        }px ${palette.galactic.stars}40, 0 0 ${size * 8}px ${
          palette.galactic.stars
        }20`,
      },
    },
  })
);
