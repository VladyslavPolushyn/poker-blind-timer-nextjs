import React, { FC } from 'react';
import styles from './TableItem.module.scss';
import { TableData } from '../../types';
import { changeRound, deleteRound } from '../../store/actions';
import { useDispatch } from 'react-redux';
import Image from 'next/image';

const TableItem: FC<TableData> = (props) => {
  const dispatch = useDispatch();

  const { round, sb, bb, ante, roundTime } = props;

  const inputChangeHandler = (value: string, changedField: string) => {
    value = value.replace(/[^\d]/g, '');

    switch (changedField) {
      case 'sb':
        dispatch(changeRound({ round, bb, ante, roundTime, sb: +value }));
        break;
      case 'bb':
        dispatch(changeRound({ round, bb: +value, ante, roundTime, sb }));
        break;
      case 'ante':
        dispatch(changeRound({ round, bb, ante: +value, roundTime, sb }));
        break;
      case 'roundTime':
        dispatch(changeRound({ round, bb, ante, roundTime: +value, sb }));
        break;
      default:
        console.log('Sorry, we are out of ' + changedField + '.');
    }
  };

  const deleteHandler = (itemToDeleteNumber: number) => {
    dispatch(deleteRound(itemToDeleteNumber));
  };

  return (
    <tr className={styles.TableItem}>
      <td className={styles.TableItem__cell}>{round}</td>
      <td className={styles.TableItem__cell}>
        <input
          className={`${styles.TableItem__input} ${styles['TableItem__input--sb']}`}
          type="text"
          value={sb}
          onChange={(event) => inputChangeHandler(event.target.value, 'sb')}
        />
      </td>
      <td className={styles.TableItem__cell}>
        <input
          className={`${styles.TableItem__input} ${styles['TableItem__input--bb']}`}
          type="text"
          value={bb}
          onChange={(event) => inputChangeHandler(event.target.value, 'bb')}
        />
      </td>
      <td className={styles.TableItem__cell}>
        <input
          className={`${styles.TableItem__input} ${styles['TableItem__input--ante']}`}
          type="text"
          value={ante}
          onChange={(event) => inputChangeHandler(event.target.value, 'ante')}
        />
      </td>
      <td className={styles.TableItem__cell}>
        <input
          className={`${styles.TableItem__input} ${styles['TableItem__input--round-time']}`}
          type="text"
          value={roundTime}
          onChange={(event) =>
            inputChangeHandler(event.target.value, 'roundTime')
          }
        />
      </td>
      <td className={styles.TableItem__cell}>
        <button
          onClick={() => deleteHandler(round - 1)}
          className={styles['TableItem__delete-button']}
        >
          <Image src="/close.svg" alt="Close" width={18} height={18} />
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
