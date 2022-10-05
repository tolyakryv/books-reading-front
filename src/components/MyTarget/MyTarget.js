// import { useSelector } from "react-redux";
// import { useGetStatisticsQuery } from "../../redux/slice/statisticsSlice";
import s from "./MyTarget.module.css";

const MyTarget = ({ amountBooks = 3, daysLeft = 28, booksLeft = 1 }) =>
  // const amountBooks = useSelector((state) => state.myTarget.amountBooks);
  // const daysLeft = useSelector((state) => state.myTarget.daysLeft);
  // const booksLeft = useSelector((state) => state.myTarget.booksLeft);

  {
    // const { data } = useGetStatisticsQuery();
    // const { book, startDate, finishDate } = data;
    // const amountBooks = book.length;
    // const daysLeft = Math.floor(
    //   (finishDate - startDate) / (1000 * 60 * 60 * 24)
    // );
    // const booksFinished = book.filter((item) => item.status !== "readingNow");
    // const booksLeft = booksFinished.length;

    return (
      <div className={s.container}>
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
