import styled, { keyframes } from "styled-components";
import { Keyframes } from "styled-components";

const glitchAnimation = keyframes`    
    0% {
      text-shadow: 0.05em 0 0 rgba(246, 82, 153, 1), 
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(81, 245, 244, 0.75);
    }
    14% {
      text-shadow: 0.05em 0 0 rgba(246, 82, 153, 1),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(81, 245, 244, 0.75);
    }
    15% {
      text-shadow: -0.05em -0.025em 0 rgba(246, 82, 153, 1),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(81, 245, 244, 0.75);
    }
    49% {
      text-shadow: -0.05em -0.025em 0 rgba(246, 82, 153, 1),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(81, 245, 244, 0.75);
    }
    50% {
      text-shadow: 0.025em 0.05em 0 rgba(246, 82, 153, 1),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(81, 245, 244, 0.75);
    }
    99% {
      text-shadow: 0.025em 0.05em 0 rgba(246, 82, 153, 1),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(81, 245, 244, 0.75);
    }
    100% {
      text-shadow: -0.025em 0 0 rgba(246, 82, 153, 1),
        -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em -0.05em 0 rgba(81, 245, 244, 0.75);
    } 

       `;

export const Glitch = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;

  text-shadow: 0.05em 0 0 rgba(246, 82, 153, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(81, 245, 244, 0.75);

  animation: ${glitchAnimation} 500ms infinite;
`;

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  //span aria-hidden="true"

  &:first-child {
    animation: ${glitchAnimation} 650ms infinite;
    clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    transform: translate(-0.025em, -0.0125em);
    opacity: 0.8;
  }

  &:second-child {
    animation: ${glitchAnimation} 375ms infinite;
    clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
    transform: translate(0.0125em, 0.025em);
    opacity: 0.8;
  }
`;

// @media (prefers-reduced-motion: reduce) {
//   *,
//   ::before,
//   ::after {
//     animation-delay: -1ms !important;
//    animation-duration: 1ms !important;
//     animation-iteration-count: 1 !important;
//    background-attachment: initial !important;
//    scroll-behavior: auto !important;
//    transition-duration: 0s !important;
//    transition-delay: 0s !important;
//    }
// }
