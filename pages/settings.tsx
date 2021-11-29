import { FC, useState } from 'react';
import { Table } from 'react-bootstrap';
import TableItem from '../src/components/TableItem/TableItem';
import styles from './../styles/SettingsPage.module.scss';
import { TableData } from '../src/types';
import { useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';

const SettingsPage: FC = () => {
  const { tableData } = useSelector((state: RootState) => state);

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
      </div>
    </div>
  );
};

export default SettingsPage;
