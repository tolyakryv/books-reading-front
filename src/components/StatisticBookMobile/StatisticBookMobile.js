import s from "../StatisticBookMobile/StatisticBookMobile.module.css";
import {
  useGetTrainQuery,
  useUpdateStatusBookMutation,
} from "../../services/trainingAPI";

const StatisticBookMobile = ({ onReadBook }) => {
  const [updateStatusBook] = useUpdateStatusBookMutation();
  const { data } = useGetTrainQuery();
  let bookGoingToRead = [];
  if (data) {
    bookGoingToRead = data.book.filter(
      (book) => book.status === "readingNow" || book.status === "alreadyRead"
    );
  }

  const handleChange = async (id) => {
    const chbox = document.getElementById(id);

    if (chbox.checked) {
      try {
        const bookId = id;
        console.log(bookId);
        const status = "alreadyRead";
        await updateStatusBook({
          bookId,
          status,
        });
        await onReadBook(data.book.find((book) => book._id === id).amountPages);
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (data?.length === 0) {
    return (
      <div>
        <div className={s.wrapper}>
          <div>
            <input
              type="checkbox"
              id="book"
              name="book"
              className={s.myinput}
            ></input>
          </div>
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
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {bookGoingToRead.map((e) => (
          <div className={s.wrapper}>
            <div>
              <input
                type="checkbox"
                className={s.myinput}
                id={e._id}
                name="book"
                checked={e.status === "alreadyRead"}
                onChange={() => handleChange(e._id)}
              ></input>
              <label for={e._id}>
                <span></span>
              </label>
            </div>
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
          </div>
        ))}
      </div>
    );
  }
};

export default StatisticBookMobile;
