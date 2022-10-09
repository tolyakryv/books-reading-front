import { useEffect, useState } from "react";
import { useGetTrainQuery } from "../../services/trainingAPI";
import s from "./MyTarget.module.css";

const MyTarget = ({ className }) => {
  const [amountBooks, setAmountBooks] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);
  const [booksLeft, setBooksLeft] = useState(0);
  const { data } = useGetTrainQuery();

  useEffect(() => {
    if (data) {
      setAmountBooks(data.book.length);
      const booksAlreadyRead = data.book.filter(
        (item) => item.status === "alreadyRead"
      );
      const booksLeft = amountBooks - booksAlreadyRead.length;
      setBooksLeft(booksLeft);
    }
  }, [amountBooks, data]);

  useEffect(() => {
    if (data) {
      const { startDate, finishDate } = data;
      const daysLeft = Math.floor(
        (finishDate - startDate) / (1000 * 60 * 60 * 24)
      );
      setDaysLeft(daysLeft);
    }
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
