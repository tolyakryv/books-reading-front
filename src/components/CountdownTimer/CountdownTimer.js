import { useCountdown } from "../../hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";
import styles from "./CountdownTimer.module.css";

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.showCounter}>
      <DateTimeDisplay value={days} type={"ДН"} isDanger={days <= 3} />
      <span>:</span>
      <DateTimeDisplay value={hours} type={"ГОД"} isDanger={false} />
      <span>:</span>
      <DateTimeDisplay value={minutes} type={"ХВ"} isDanger={false} />
      <span>:</span>
      <DateTimeDisplay value={seconds} type={"СЕК"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  // console.log(new Date(targetDate).getTime());
  // console.log(new Date().getTime());
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
