import { FC, useState } from 'react';
import { Table } from 'react-bootstrap';
import TableItem from '../src/components/TableItem/TableItem';
import styles from './../styles/SettingsPage.module.scss';

interface TableItemTypes {
  round: number;
  sb: number;
  bb: number;
  ante: number;
  roundTime: number;
}

const SettingsPage: FC = () => {
  const [tableData, setTableData] = useState([
    { round: 1, sb: 5, bb: 10, ante: 0, roundTime: 12 },
    { round: 2, sb: 10, bb: 20, ante: 0, roundTime: 12 },
    { round: 3, sb: 20, bb: 40, ante: 0, roundTime: 12 },
    { round: 4, sb: 25, bb: 50, ante: 0, roundTime: 12 },
    { round: 5, sb: 50, bb: 100, ante: 0, roundTime: 12 },
    { round: 6, sb: 75, bb: 150, ante: 0, roundTime: 12 },
    { round: 7, sb: 100, bb: 200, ante: 0, roundTime: 12 },
    { round: 8, sb: 150, bb: 300, ante: 0, roundTime: 12 },
    { round: 9, sb: 200, bb: 400, ante: 0, roundTime: 12 },
    { round: 10, sb: 300, bb: 600, ante: 0, roundTime: 12 },
  ]);

  const onInputChangeHandler = ({
    round,
    sb,
    bb,
    ante,
    roundTime,
  }: TableItemTypes) => {
    const newTableData = [...tableData];
    newTableData[round - 1] = { round, sb, bb, ante, roundTime };
    setTableData(newTableData);
  };

  return (
    <div className={styles.SettingsPage}>
      <div className={`${styles.SettingsPage__container} container`}>
        <Table className={`${styles.SettingsPage__table} ${styles.Table}`}>
          <thead>
            <tr>
              <th className={styles['Table__column-header']}>Round</th>
              <th className={styles['Table__column-header']}>Small Blind</th>
              <th className={styles['Table__column-header']}>Big Blind</th>
              <th className={styles['Table__column-header']}>Ante</th>
              <th className={styles['Table__column-header']}>Round Time</th>
              <th className={styles['Table__column-header']}>Delete Round</th>
            </tr>
          </thead>
          <tbody className={styles.Table__body}>
            {tableData.map((item) => (
              <TableItem
                key={item.round}
                round={item.round}
                sb={item.sb}
                bb={item.bb}
                ante={item.ante}
                roundTime={item.roundTime}
                onInputChangeHandler={onInputChangeHandler}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default SettingsPage;
