import { useCallback, useState } from "react";
import { BallDiv } from "./styles";

// I want the ball to flip between five states
const ballStates = ["one", "two", "three", "four", "five"];

// I set the default state to "one"
export default function Ball() {
  const [currentBallState, setCurrentBallState] = useState("one");

  // Making a function for when the mouse touches the ball
  const handleStateChange = useCallback(() => {
    const prevState = currentBallState;
    let randomIndex;
    /* Using a "do while" loop. Do: We want a random index from the ballStates array.
    We store that inside the randomIndex variable.
    While: We want the ball to move, so we don't want the previous state to match the current one.
    We want to flip onto the next number in the array */
    do {
      randomIndex = Math.floor(Math.random() * (ballStates.length - 0) + 0);
    } while (prevState === ballStates[randomIndex]);
    setCurrentBallState(ballStates[randomIndex]);
  }, [currentBallState]);

  return (
    <BallDiv className={currentBallState} onMouseEnter={handleStateChange} />
  );
}
