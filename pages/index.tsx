import type { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';
import Timer from '../src/components/Timer/Timer';
import styles from '../styles/HomePage.module.scss';

const Home: NextPage = () => {
  const { tableData } = useSelector((state: RootState) => state);
  console.log(tableData);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  return (
    <div className={styles.HomePage}>
      <div className="container">
        <Timer expiryTimestamp={time} />
      </div>
    </div>
  );
};

export default Home;
