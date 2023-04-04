import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { StateContext } from '../../../StateProvider';

const Clock = () => {
      const { time, setTime, isActive, setIsActive, initTime } = useContext(StateContext);
      // const [isActive, setIsActive] = useContext(false)

      useEffect(() => {
            if (isActive && time > 0) {
                  const interval = setInterval(() => {
                        setTime((item) => item - 1);
                  }, 1000)
                  return () => clearInterval(interval);
            }
      }, [time, isActive]);

      const toggleClock = () => {
            setIsActive(!isActive);
      }

      const resetTime = () => {
            setTime(initTime);
            setIsActive(false)
      }
      //console.log(time);
      const getTime = (time) => {
            const min = Math.floor(time / 60);
            const sec = time % 60;
            return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
      };

      return (
            <ClockContainer>
                  <TimerText>{getTime(time)}</TimerText>
                  <StartPauseButton onClick={toggleClock}>{isActive ? "Pause" : "Start"}</StartPauseButton>
                  {time === 0 && <ResetButton onClick={resetTime}>Reset</ResetButton>}
            </ClockContainer>
      )
}

export default Clock;

const ClockContainer = styled.div`
 display: grid;
 place-items: center;
`;
const TimerText = styled.h3`
  font-size: 7rem;
`;

const StartPauseButton = styled.button`
 all: unset;
 text-align: center;
 font-size: 3.5rem;
 text-transform: uppercase;
 letter-spacing: 0.3rem;
`;

const ResetButton = styled(StartPauseButton)`
 color: red;
`;