import { useContext, useEffect, useState } from "react";
import { PlayButton } from "../../components/PlayButton";
import { ITimerContext, TimerContext } from "../../context/TimerContext";
import { Container, Content, Timer } from "./styles";

export const MainPage = () => {
  const { time, setMode, mode } = useContext(TimerContext) as ITimerContext;
  const [minutesLeft, setMinutesLeft] = useState(time);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isPlayed, setIsPlayed] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      if (isPlayed) {
        console.log("alo");
        clearInterval(interval);

        if (secondsLeft === 0) {
          if (minutesLeft !== 0) {
            setSecondsLeft(59);
            setMinutesLeft(minutesLeft - 1);
          } else {
            if (mode === 'work') {
                setMode('break')
                
            }
          }
        } else {
          setSecondsLeft(secondsLeft - 1);
        }
      }
    }, 1000);
  }, [secondsLeft, isPlayed]);

  return (
    <Container>
      <Content>
        <Timer>
          <span>
            {minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft}:
            {secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft}
          </span>
        </Timer>
        <PlayButton isPlayed={isPlayed} setIsPlayed={setIsPlayed} />
      </Content>
    </Container>
  );
};
