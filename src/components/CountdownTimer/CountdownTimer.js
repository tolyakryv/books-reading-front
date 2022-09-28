import { useCountdown } from "../../hooks/useCountdown";
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

const CountdownTimer = ({ startDateTime }) => {
  const [days, hours, minutes, seconds] = useCountdown(startDateTime);
  console.log(new Date(startDateTime).getTime());
  console.log(new Date().getTime());
  if (days + hours + minutes + seconds <= 0) {
    console.log("countdown is over");
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
