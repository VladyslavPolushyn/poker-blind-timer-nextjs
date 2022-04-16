import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';
import Timer from '../src/components/Timer/Timer';
import styles from '../styles/HomePage.module.scss';

const Home: NextPage = () => {
  const { tableData, currentRound } = useSelector((state: RootState) => state);
  console.log(tableData, currentRound);

  const time = new Date();
  time.setSeconds(
    // time.getSeconds() + tableData[currentRound - 1].roundTime * 60
    time.getSeconds() + tableData[currentRound - 1].roundTime * 1
  );

  return (
    <div className={styles.HomePage}>
      <div className="container">
        <Timer expiryTimestamp={time} currentRound={currentRound} />
      </div>
    </div>
  );
};

export default Home;
