import CountdownToEndYear from "../CountdownToEndYear/CountdownToEndYear";
import CountdownToTarget from "../CountdownToTarget/CountdownToTarget";
import getEndOfYear from "../getEndOfYear";
import styles from "./ShowTimer.module.css";

const startTime = new Date("2022-09-28T19:39:30").getTime();
const endTime = new Date("2022-09-28T19:39:35").getTime();
const now = Date.now();
// const now = new Date("2022-12-31T23:59:50").getTime();
// const endOfYear = new Date(2022, 11, 32);
const endOfYear = getEndOfYear(new Date().getFullYear());

const ShowTimer = () => {
  return (
    <div className={styles.timerContainer}>
      <CountdownToEndYear startTime={now} endTime={endOfYear} />
      <CountdownToTarget startTime={startTime} endTime={endTime} />
    </div>
  );
};

export default ShowTimer;
