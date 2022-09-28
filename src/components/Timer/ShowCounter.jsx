import DateTimeItem from "./DateTimeItem";
import styles from "./CountdownTimer.module.css";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.showCounter}>
      <DateTimeItem value={days} type={"дн"} />
      <span className={styles.separator}>:</span>
      <DateTimeItem value={hours} type={"год"} />
      <span className={styles.separator}>:</span>
      <DateTimeItem value={minutes} type={"хв"} />
      <span className={styles.separator}>:</span>
      <DateTimeItem value={seconds} type={"сек"} />
    </div>
  );
};

export default ShowCounter;
