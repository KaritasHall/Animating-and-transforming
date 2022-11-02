import styled, { keyframes } from "styled-components";
import { Keyframes } from "styled-components";

export const Glitch = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;

  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
    -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
    0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

  animation: glitchAnimation 500ms infinite;
`;

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  //span aria-hidden="true"
`;

//   .glitch span:first-child {
//     animation: glitchAnimation 650ms infinite;
//     clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
//     transform: translate(-0.025em, -0.0125em);
//     /* color: green; */
//     opacity: 0.8;
//   }

//   .glitch span:last-child {
//     animation: glitchAnimation 375ms infinite;
//     clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
//     transform: translate(0.0125em, 0.025em);
//     /* color: red; */
//     opacity: 0.8;
//   }

// //

const glitchAnimation = keyframes`    
    0% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    14% {
      text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
    15% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    49% {
      text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
        0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
        -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    50% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    99% {
      text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
        0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
    }
    100% {
      text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
    } 
       `;

//   @media (prefers-reduced-motion: reduce) {
//     *,
//     ::before,
//     ::after {
//       animation-delay: -1ms !important;
//       animation-duration: 1ms !important;
//       animation-iteration-count: 1 !important;
//       background-attachment: initial !important;
//       scroll-behavior: auto !important;
//       transition-duration: 0s !important;
//       transition-delay: 0s !important;
//     }
//   }
