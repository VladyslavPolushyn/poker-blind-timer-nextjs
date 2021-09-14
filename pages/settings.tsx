import { FC, useState } from "react";
import { Tab, Table } from "react-bootstrap";
import TableItem from "../src/components/TableItem/TableItem";
import styles from "./../styles/SettingsPage.module.scss";

const SettingsPage: FC = () => {
  const getTableItem = (
    round: number,
    sb: number,
    bb: number,
    ante: number,
    roundTime: number
  ) => {
    return {
      round,
      sb,
      bb,
      ante,
      roundTime,
    };
  };

  const [tableData, setTableData] = useState([
    getTableItem(1, 5, 10, 0, 12),
    getTableItem(2, 10, 20, 0, 12),
    getTableItem(3, 20, 40, 0, 12),
    getTableItem(4, 25, 50, 0, 12),
    getTableItem(5, 75, 150, 0, 12),
    getTableItem(6, 100, 200, 0, 12),
    getTableItem(7, 150, 300, 0, 12),
    getTableItem(8, 200, 400, 0, 12),
    getTableItem(9, 300, 600, 0, 12),
    getTableItem(10, 400, 800, 0, 12),
    getTableItem(11, 500, 1000, 0, 12),
  ]);

  const onInputChangeHandler = (roundState: object) => {
    console.log(roundState);
  };

  return (
    <div className={styles.SettingsPage}>
      <div className={`${styles.SettingsPage__container} container`}>
        <Table className={`${styles.SettingsPage__table} ${styles.Table}`}>
          <thead>
            <tr>
              <th className={styles["Table__column-header"]}>Round</th>
              <th className={styles["Table__column-header"]}>Small Blind</th>
              <th className={styles["Table__column-header"]}>Big Blind</th>
              <th className={styles["Table__column-header"]}>Ante</th>
              <th className={styles["Table__column-header"]}>Round Time</th>
              <th className={styles["Table__column-header"]}>Delete Round</th>
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
