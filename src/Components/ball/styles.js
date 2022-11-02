import styled from "styled-components";

export const BallDiv = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transition: 600ms;
  transition-delay: 200ms;
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;

  &.one {
    background-color: rgba(81, 245, 244, 1);
    transform: translate(500px, 200px);
  }

  &.two {
    background-color: rgba(246, 82, 153, 1);
    transform: translate(300px, -500px);
  }

  &.three {
    background-color: rgba(0, 255, 0, 0.75);
    transform: translate(800px, 100px);
  }

  &.four {
    background-color: rgba(255, 232, 246, 1);
    transform: translate(-300px, -200px);
  }

  &.five {
    background-color: rgba(255, 232, 246, 1);
    transform: translate(450px, -500px);
  }
`;
