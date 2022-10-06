import s from "./BookLoader.module.css";

function n2A(n) {
  let i = 0;
  var arr = [];
  while (i < n) arr[i] = i++;
  return arr;
}

export const BookLoader = () => {
  return (
    <div className={s.container}>
      <div className={s.book}>
        <div className={s.inner}>
          <div className={s.left}></div>
          <div className={s.middle}></div>
          <div className={s.right}></div>
        </div>
        <ul>
          {n2A(18).map((key) => (
            <li num={key} key={key} />
          ))}
        </ul>
      </div>
    </div>
  );
};
