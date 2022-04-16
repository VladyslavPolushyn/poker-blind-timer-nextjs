import React, { useEffect } from 'react';
import styles from './Timer.module.scss';
import { useTimer } from 'react-timer-hook';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentRound } from '../../store/actions';
import { RootState } from 'typesafe-actions';

type TimerProps = {
  expiryTimestamp: Date;
  currentRound: number;
};

const Timer = (props: TimerProps) => {
  const { tableData } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const { expiryTimestamp, currentRound } = props;

  useEffect(() => console.log(expiryTimestamp));

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => {
        // need to dispatch current round here
        dispatch(changeCurrentRound(currentRound + 1));
        // need to restart round restart(time);
        const time = new Date();
        time.setSeconds(
          // By this time currentRound will changed in store (YES, no need to -1)?
          time.getSeconds() + 5
          // time.getSeconds() + tableData[currentRound].roundTime * 1
          // time.getSeconds() + tableData[currentRound - 1].roundTime * 60
        );
        restart(time, true);
      },
      autoStart: false,
    });

  return (
    <div className={styles.Timer}>
      <p>Time Left</p>
      <div style={{ fontSize: '100px' }}>
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button
        onClick={() => {
          // Restarts to 5 minutes timer
          const time = new Date();
          time.setSeconds(time.getSeconds() + 5);
          restart(time);
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default Timer;
