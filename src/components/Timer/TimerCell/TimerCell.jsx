import styles from "./TimerCell.module.css";
const TimerCell = ({ value, type }) => {
  return (
    <div className={styles.timerCell}>
      <span className={styles.cellValue}>{value}</span>
      <span className={styles.cellType}>{type}</span>
    </div>
  );
};

export default TimerCell;
