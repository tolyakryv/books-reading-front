import { useEffect, useState } from "react";
import { useGetTrainQuery } from "../../services/trainingAPI";
import s from "./MyTarget.module.css";

const MyTarget = ({ className }) => {
  const [amountBooks, setAmountBooks] = useState();
  const [daysLeft, setDaysLeft] = useState();
  const [booksLeft, setBooksLeft] = useState();

  const { data = [] } = useGetTrainQuery();

  useEffect(() => {
    console.log(data.book);
    const booksReadingNow = data.book.filter(
      (item) => item.status === "readingNow"
    );
    setAmountBooks(booksReadingNow.length);
    console.log(booksReadingNow);
    const booksAlreadyRead = data.book.filter(
      (item) => item.status === "alreadyRead"
    );

    const booksLeft = amountBooks - booksAlreadyRead.length;
    setBooksLeft(booksLeft);
  }, [amountBooks, data.book]);
  useEffect(() => {
    console.log(data.startDate);
    const { startDate } = data;
    console.log(data.finishDate);
    const { finishDate } = data;
    const daysLeft = Math.floor(
      (startDate - finishDate) / (1000 * 60 * 60 * 24)
    );
    setDaysLeft(daysLeft);
  }, [data]);

  return (
    <div className={`${s.container} ${className}`}>
      <p className={s.title}>Моя мета прочитати</p>

      <div className={s.targetListContainer}>
        <ul className={s.targetList}>
          <li className={s.targetItem}>
            <div className={s.valueContainer}>
              <span className={s.value}>{amountBooks}</span>
            </div>

            <span className={s.capture}>Кількість книжок</span>
          </li>
          <li className={s.targetItem}>
            <div className={s.valueContainer}>
              <span className={s.value}>{daysLeft}</span>
            </div>

            <span className={s.capture}>Кількість днів</span>
          </li>
          <li className={s.targetItem}>
            <div className={s.valueContainer}>
              <span className={s.value}>{booksLeft}</span>
            </div>

            <span className={s.capture}>Залишилось книжок</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyTarget;
