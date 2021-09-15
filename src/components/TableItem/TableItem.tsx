import React, { FC, useEffect, useState } from "react";
import styles from "./TableItem.module.scss";
import { TableItemProps } from "../../types";

const TableItem: FC<TableItemProps> = ({
  round,
  sb,
  bb,
  ante,
  roundTime,
  onInputChangeHandler,
}) => {
  // need to set round number to state from props and return it to tableData state
  const [roundState, setRoundState] = useState({
    round,
    sb,
    bb,
    ante,
    roundTime,
  });

  const inputChangeHandler = (value: number, changedField: string) => {
    switch (changedField) {
      case "sb":
        setRoundState({ ...roundState, sb: value });
        break;
      case "bb":
        setRoundState({ ...roundState, bb: value });
        break;
      case "ante":
        setRoundState({ ...roundState, ante: value });
        break;
      case "roundTime":
        setRoundState({ ...roundState, roundTime: value });
        break;
      default:
        console.log("Sorry, we are out of " + changedField + ".");
    }
  };

  useEffect(() => {
    onInputChangeHandler(roundState);
  }, [roundState]);

  return (
    <tr className={styles.TableItem}>
      <td className={styles.TableItem__cell}>{round}</td>
      <td className={styles.TableItem__cell}>
        <input
          className={`${styles.TableItem__input} ${styles["TableItem__input--sb"]}`}
          type="number"
          value={roundState.sb}
          min={0}
          max={1000000}
          onChange={(event) => inputChangeHandler(+event.target.value, "sb")}
        />
      </td>
      <td className={styles.TableItem__cell}>
        <input
          className={`${styles.TableItem__input} ${styles["TableItem__input--bb"]}`}
          type="number"
          value={roundState.bb}
          min={0}
          max={1000000}
          onChange={(event) => inputChangeHandler(+event.target.value, "bb")}
        />
      </td>
      <td className={styles.TableItem__cell}>
        <input
          className={`${styles.TableItem__input} ${styles["TableItem__input--ante"]}`}
          type="number"
          value={roundState.ante}
          min={0}
          max={1000000}
          onChange={(event) => inputChangeHandler(+event.target.value, "ante")}
        />
      </td>
      <td className={styles.TableItem__cell}>
        <input
          className={`${styles.TableItem__input} ${styles["TableItem__input--round-time"]}`}
          type="number"
          min={0}
          max={60}
          value={roundState.roundTime}
          onChange={(event) =>
            inputChangeHandler(+event.target.value, "roundTime")
          }
        />
      </td>
      <td className={styles.TableItem__cell}>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default TableItem;
