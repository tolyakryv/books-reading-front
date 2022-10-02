import s from "../Goals/Goals.module.css";
const Goals = ({data}) => {
  return (
    <div className={s.main}>
      <div className={s.whiteWrapper}>
        <div className={s.wrapper}>
          <span className={s.text}>Моя мета прочитати</span>{" "}
        </div>
        <div className={s.row}>
          {data.map(e=> <div className={s.column}>
            <div className={s.box}>
              <span className={s.number}>{e.value}</span>
            </div>
            <div>
              <span className={s.greyText}>{e.text}</span>
            </div>
          </div>)}
          
        </div>{" "}
      </div>
    </div>
  );
};

export default Goals;
