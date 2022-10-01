import iconLibrary from "../../img/icon library.svg";
import iconButton from "../../img/more.svg";
import { HandySvg } from "handy-svg";
import style from "./LibraryBooksList.module.css";
import { useNavigate } from "react-router-dom";
import { Mobile, Tablet, Desctop } from "../../helpers/responsiveComponents";
// import { useGetAllBookQuery } from "../../services/booksAPI";

export const LibraryBooksList = () => {
  //   const { data = [] } = useGetAllBookQuery();
  const navigate = useNavigate();

  const books = [
    {
      id: "dqwdqwddqw",
      title: "Ice",
      author: "Паввел ",
      publicDate: "2006",
      amountPages: "999",
      rating: 5,
    },
    {
      id: "dqwdqwddqwdqwdqw",
      title: "Ice",
      author: "Паввел ",
      publicDate: "2006",
      amountPages: "999",
      rating: 5,
    },
    {
      id: "dqwdqwdwdqwdwq",
      title: "Ice",
      author: "Паввел ",
      publicDate: "2006",
      amountPages: "999",
      rating: 5,
    },
  ];

  const handleMyTraining = () => {
    navigate("/training");
  };

  return (
    <>
      <Mobile>
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
          <button
            type="button"
            className={style.buttonTraining}
            onClick={handleMyTraining}
          >
            Моє тренування
          </button>
          <HandySvg
            className={style.buttonMore}
            src={iconButton}
            width="52px"
            height="52px"
          />
        </div>
      </Mobile>
      <Tablet>
        <div className={style.container}>
          <h1>Маю намір прочитати</h1>
          <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </Tablet>
    </>
  );
};
