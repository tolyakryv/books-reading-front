import iconLibrary from "../../img/icon library.svg";
import iconButton from "../../img/more.svg";
import { HandySvg } from "handy-svg";
import style from "./BooksList.module.css";
// import { useGetAllBookQuery } from "../../services/booksAPI";

export const BooksList = () => {
  //   const { data = [] } = useGetAllBookQuery();

  const books = [
    {
      id: "dqwdqwddqw",
      name: "Ice",
      autor: "Паввел ",
      year: "2006",
      pages: "999",
    },
    {
      id: "dqwdqwddqwdqwdqw",
      name: "Ice",
      autor: "Паввел ",
      year: "2006",
      pages: "999",
    },
    {
      id: "dqwdqwddqwdqwdwq",
      name: "Ice",
      autor: "Паввел корнев",
      year: "2006",
      pages: "9",
    },
    {
      id: "dqwdqwdwdqwdwq",
      name: "Ice",
      autor: "Паввел корнев",
      year: "2006",
      pages: "9",
    },
    {
      id: "dqwdqwddqwdqwq",
      name: "Ice",
      autor: "Паввел корнев",
      year: "2006",
      pages: "9",
    },
    {
      id: "dqqwddqwdqwdwq",
      name: "Ice",
      autor: "Паввел корнев",
      year: "2006",
      pages: "9",
    },
  ];

  const handleMyTraining = () => {
    console.log("ghbdt");
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Маю намір прочитати</h1>
      <ul className={style.list}>
        {books.map((book) => {
          return (
            <li key={book.id} className={style.item}>
              <div className={style.icon}>
                <HandySvg src={iconLibrary} width="22px" height="17px" />
              </div>
              <div>
                <h2 className={style.bookName}>{book.name}</h2>
                <dl className={style.description}>
                  <dt className={style.key}>Автор:</dt>
                  <dd className={style.property}>{book.autor}</dd>
                </dl>
                <dl className={style.description}>
                  <dt className={style.key}>Рік:</dt>
                  <dd className={style.property}>{book.year}</dd>
                </dl>
                <dl className={style.description}>
                  <dt className={style.key}>Стор.:</dt>
                  <dd className={style.property}>{book.pages}</dd>
                </dl>
              </div>
            </li>
          );
        })}
      </ul>
      <button type="button" className={style.buttonTraining}>
        Моє тренування
      </button>
      <HandySvg
        className={style.buttonMore}
        src={iconButton}
        width="52px"
        height="52px"
        onClick={handleMyTraining}
      />
    </div>
  );
};
