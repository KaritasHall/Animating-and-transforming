import { useCallback, useState } from "react";
import { BallDiv } from "./styles";

const ballStates = ["one", "two", "three", "four", "five"];

export default function Ball() {
  const [currentBallState, setCurrentBallState] = useState("one");

  const handleStateChange = useCallback(() => {
    const prevState = currentBallState;
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * (ballStates.length - 0) + 0);
    } while (prevState === ballStates[randomIndex]);
    setCurrentBallState(ballStates[randomIndex]);
  }, [currentBallState]);

  return (
    <BallDiv className={currentBallState} onMouseEnter={handleStateChange} />
  );
}
