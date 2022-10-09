import useCountdown from "../../../hooks/useCountdown";
import ShowCounter from "../ShowCounter/ShowCounter";
import transformMSTime from "../../../components/Timer/transformMSTime";
import styles from "./CountdownToEndYear.module.css";

const CountdownToEndYear = ({ startTime, endTime }) => {
  const countdown = useCountdown(startTime, endTime);
  const [days, hours, minutes, seconds] = transformMSTime(countdown);
  if (countdown <= 0) {
    console.log("countdown is over");
    return (
      <div className={styles.countdownContainer}>
        <p className={styles.caption}>До закінчення року залишилось</p>
        <ShowCounter days="00" hours="00" minutes="00" seconds="00" />
      </div>
    );
  } else {
    return (
      <div className={styles.countdownContainer}>
        <p className={styles.caption}>До закінчення року залишилось</p>
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

export default CountdownToEndYear;
