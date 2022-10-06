import TimerCell from "../TimerCell/TimerCell";
import styles from "./ShowCounter.module.css";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.showCounter}>
      <TimerCell value={days} type={"дн"} />
      <span className={styles.separator}>:</span>
      <TimerCell value={hours} type={"год"} />
      <span className={styles.separator}>:</span>
      <TimerCell value={minutes} type={"хв"} />
      <span className={styles.separator}>:</span>
      <TimerCell value={seconds} type={"сек"} />
    </div>
  );
};

export default ShowCounter;
