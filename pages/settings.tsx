import { FC, useState } from 'react';
import { Table } from 'react-bootstrap';
import Button from '../src/components/Button/Button';
import TableItem from '../src/components/TableItem/TableItem';
import styles from './../styles/SettingsPage.module.scss';
import { TableData } from '../src/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';
import { addRound } from '../src/store/actions';

const SettingsPage: FC = () => {
  const dispatch = useDispatch();
  const { tableData } = useSelector((state: RootState) => state);

  const getRoundInfo = (
    round: number = 1,
    sb: number = 5,
    bb: number = 10,
    ante: number = 0,
    roundTime: number = 12
  ) => {
    return { round, sb, bb, ante, roundTime };
  };

  const addRoundHandler = () => {
    let newRoundData;

    tableData.length === 0
      ? (newRoundData = getRoundInfo())
      : (newRoundData = getRoundInfo(
          tableData.length + 1,
          tableData[tableData.length - 1].sb * 2,
          tableData[tableData.length - 1].bb * 2,
          tableData[tableData.length - 1].ante,
          tableData[tableData.length - 1].roundTime
        ));

    dispatch(addRound(newRoundData));
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
            {tableData.map((item: TableData) => (
              <TableItem
                key={item.round}
                round={item.round}
                sb={item.sb}
                bb={item.bb}
                ante={item.ante}
                roundTime={item.roundTime}
              />
            ))}
          </tbody>
        </Table>
        <Button clickHandler={addRoundHandler} buttonText={'Add new round'} />
      </div>
    </div>
  );
};

export default SettingsPage;
