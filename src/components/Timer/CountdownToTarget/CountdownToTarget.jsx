import { toast } from "react-toastify";
import useCountdown from "../../../hooks/useCountdown";
import ShowCounter from "../ShowCounter/ShowCounter";
import styles from "./CountdownToTarget.module.css";

const CountdownToTarget = ({ startTime, endTime }) => {
  const [days, hours, minutes, seconds] = useCountdown(startTime, endTime);
  if (days + hours + minutes + seconds <= 0) {
    console.log("countdown is over");
    toast.info(
      "Ти молодчина, але потрібно швидше! Наступного разу тобі все вдасться)"
    );

    return (
      <div className={styles.countdownContainer}>
        <p className={styles.caption}>До досягнення мети залишилось</p>
        <ShowCounter days="00" hours="00" minutes="00" seconds="00" />
      </div>
    );
  } else {
    return (
      <div className={styles.countdownContainer}>
        <p className={styles.caption}>До досягнення мети залишилось</p>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    );
  }
};

export default CountdownToTarget;
