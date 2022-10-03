import s from "./MyTarget.module.css";

const MyTarget = (
  data = {
    amountBooks: 3,
    daysLeft: 28,
    booksLeft: 1,
  }
) => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <p>Моя мета прочитати</p>
      </div>
      <ul className={s.targetList}>
        <li className={s.targetItem}>
          <span className={s.value}>{data.amountBooks}</span>
          <span className={s.capture}>Кількість книжок</span>
        </li>
        <li className={s.targetItem}>
          <span className={s.value}>{data.daysLeft}</span>
          <span className={s.capture}>Кількість днів</span>
        </li>
        <li className={s.targetItem}>
          <span className={s.value}>{data.booksLeft}</span>
          <span className={s.capture}>Залишилось книжок</span>
        </li>
      </ul>
    </div>
  );
};

export default MyTarget;
