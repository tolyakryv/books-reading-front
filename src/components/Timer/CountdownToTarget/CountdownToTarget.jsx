import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import useCountdown from "../../../hooks/useCountdown";
import ShowCounter from "../ShowCounter/ShowCounter";
import transformMSTime from "../../../components/Timer/transformMSTime";
import { useGetTrainQuery } from "../../../services/trainingAPI";
import styles from "./CountdownToTarget.module.css";

const CountdownToTarget = ({ startTime, endTime }) => {
  const [isCountingStatus, setIsCountingStatus] = useState(true);
  const { data } = useGetTrainQuery();
  console.log("data->>>", data);

  useEffect(() => {
    if (!data) return;
    const booksAlreadyRead = data.book.filter(
      (item) => item.status === "alreadyRead"
    ).length;
    const amountBooks = data.book.length;
    if (booksAlreadyRead === amountBooks) {
      setIsCountingStatus(false);
      console.log("compare");
    }
    console.log("booksAlreadyRead::", booksAlreadyRead);
    console.log("amountBooks::", amountBooks);
  }, [data]);
  const countdown = useCountdown(startTime, endTime, isCountingStatus);
  console.log("countdown->>>>", countdown);
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
    );
  }
};

export default CountdownToTarget;
