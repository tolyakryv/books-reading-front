
import IconDelete from "../../img/delete.svg";
import { HandySvg } from "handy-svg";
import s from "../TableMin/TableMin.module.css"

const TableMin = ({ data, handleDelete, cellItem }) => {
  if (data.length === 0) {
    return (
      <div>
        <div className={s.wrapper}>
          <div>{cellItem}</div>
          <div className={s.bigColumn}>
            <div className={s.title}>...</div>
            <div className={s.row}>
              <div className={s.column}>
                <div className={s.cell}>
                  <span className={s.grey}>Автор:</span>
                </div>
                <div className={s.cell}>
                  <span className={s.grey}>Рік:</span>
                </div>
                <div className={s.cell}>
                  <span className={s.grey}>Стор.:</span>
                </div>
              </div>
              <div className={s.column}>
                <div className={s.cell}>...</div>
                <div className={s.cell}>...</div>
                <div className={s.cell}>...</div>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <button className={s.button} type="button">
              {" "}
              <HandySvg src={IconDelete} className={s.svg} />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {data.map((e) => (
          <div className={s.wrapper}>
            <div>{cellItem}</div>
            <div className={s.bigColumn}>
              <div className={s.box}>
                <p className={s.width}><span className={s.title}>{e.title}</span></p>
                <div className={s.row}>
                  <div className={s.column}>
                    <dl className={s.description}>
                      <dt className={s.key}>Автор:</dt>
                      <dd className={s.property}>
                        <span className={s.author}>{e.author}</span>
                      </dd>
                    </dl>
                    <dl className={s.description}>
                      <dt className={s.key}>Рік:</dt>
                      <dd className={s.property}>{e.publicDate}</dd>
                    </dl>
                    <dl className={s.description}>
                      <dt className={s.key}>Стор.:</dt>
                      <dd className={s.property}>{e.amountPages}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <button
                className={s.button}
                type="button"
                onClick={() => handleDelete(e._id)}
              >
                {" "}
                <HandySvg src={IconDelete} className={s.svg} />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
    
 
 export default TableMin