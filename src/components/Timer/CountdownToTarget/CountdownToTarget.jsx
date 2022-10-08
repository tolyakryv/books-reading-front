import { toast } from "react-toastify";
import { useEffect } from "react";
import useCountdown from "../../../hooks/useCountdown";
import ShowCounter from "../ShowCounter/ShowCounter";
import transformMSTime from "../../../components/Timer/transformMSTime";
import { useGetTrainQuery } from "../../../services/trainingAPI";
import styles from "./CountdownToTarget.module.css";

const CountdownToTarget = ({ startTime, endTime }) => {
  const { data } = useGetTrainQuery();

  useEffect(() => {
    if (!data) return;
    // const pagesAlredyRead = data.statistic
    //   .map((item) => item.amountPages)
    //   .reduce((sum, current) => sum + current);
    // const booksAlreadyRead = data.book.filter(
    //   (item) => item.status === "alreadyRead"
    // );
  });
  const [countdown] = useCountdown(startTime, endTime);
  const [days, hours, minutes, seconds] = transformMSTime(countdown);
  if (countdown > 0) {
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
  if (countdown <= 0) {
    console.log("countdown is over");
    toast.info(
      "Ти молодчина, але потрібно швидше! Наступного разу тобі все вдасться)"
    );
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
      // return (
      //   <div className={styles.countdownContainer}>
      //     <p className={styles.caption}>До досягнення мети залишилось</p>
      //     <ShowCounter days="00" hours="00" minutes="00" seconds="00" />
      //   </div>
      // );
    );
  }
};

export default CountdownToTarget;
