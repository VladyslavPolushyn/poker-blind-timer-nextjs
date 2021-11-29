import React from 'react';
import styles from './Timer.module.scss';
import { useTimer } from 'react-timer-hook';

type TimerProps = {
  expiryTimestamp: Date;
};

const Timer = (props: TimerProps) => {
  const { expiryTimestamp } = props;

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn('onExpire called'),
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
          time.setSeconds(time.getSeconds() + 300);
          restart(time);
        }}
      >
        Restart
      </button>
    </div>
  );
};

export default Timer;
