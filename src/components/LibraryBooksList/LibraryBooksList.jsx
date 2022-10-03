import iconLibrary from "../../img/icon library.svg";
import iconButton from "../../img/more.svg";
import orangeIconLibrary from "../../img/orange library.svg";
import { HandySvg } from "handy-svg";
import style from "./LibraryBooksList.module.css";
import { useNavigate } from "react-router-dom";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import { Rating } from "@mui/material";
// import { useGetAllBookQuery } from "../../services/booksAPI";

export const LibraryBooksList = () => {
  //   const { data = [] } = useGetAllBookQuery();
  const navigate = useNavigate();

  const data = [
    {
      id: "dqwdqwddqw",
      title: "Лед Моя любимая книга в детстве и универе",
      author: "Паввелdqwdqw dqwddqwdqwdqwd ",
      publicDate: "2006",
      amountPages: "999dw",
      rating: 2,
      status: "alreadyRead",
    },
    {
      id: "dqwdqwddqwdqwdqwdqwdqwd",
      title: "Лед ",
      publicDate: "2006",
      amountPages: "999dw",
      rating: 3,
      status: "alreadyRead",
    },
    {
      id: "dqwdqwddqwdqwdqw",
      title: "Ice",
      author: "Паввел ",
      publicDate: "2006",
      amountPages: "999",
      rating: 1,
      status: "goingToRead",
    },
    {
      id: "dqwdqwddqwdqwdqwdqwdqwdqwd",
      title: "Ice",
      author: "Паввел ",
      publicDate: "2006",
      amountPages: "999",
      rating: 1,
      status: "goingToRead",
    },
    {
      id: "dqwdqwdwdqwdwq",
      title: "Ice",
      author: "Паввел ",
      publicDate: "2006",
      amountPages: "999",
      rating: 4,
      status: "readingNow",
    },
    {
      id: "dqwdqwdwdqwdwqdqwdqwdqwdqwdqwdqw",
      title: "Ice",
      author: "Паввел ",
      publicDate: "2006",
      amountPages: "999",
      rating: 4,
      status: "readingNow",
    },
  ];

  const handleMyTraining = () => {
    navigate("/training");
  };

  return (
    <>
      <Mobile>
        <div className={style.container}>
          {data.some((book) => book.status === "alreadyRead") && (
            <>
              <h1 className={style.title}>Прочитано</h1>
              <ul className={style.list}>
                {data.map((book) => {
                  return (
                    book.status === "alreadyRead" && (
                      <li key={book.id} className={style.item}>
                        <div className={style.icon}>
                          <HandySvg
                            src={iconLibrary}
                            width="22px"
                            height="17px"
                          />
                        </div>
                        <div>
                          <h2 className={style.bookName}>{book.title}</h2>
                          <dl className={style.description}>
                            <dt className={style.key}>Автор:</dt>
                            <dd className={style.property}>{book.author}</dd>
                          </dl>
                          <dl className={style.description}>
                            <dt className={style.key}>Рік:</dt>
                            <dd className={style.property}>
                              {book.publicDate}
                            </dd>
                          </dl>
                          <dl className={style.description}>
                            <dt className={style.key}>Стор.:</dt>
                            <dd className={style.property}>
                              {book.amountPages}
                            </dd>
                          </dl>
                          <dl className={style.description}>
                            <dt className={style.key}>Рейтинг:</dt>
                            <dd className={style.property}>
                              <Rating
                                name="read-only"
                                value={book.rating}
                                readOnly
                              />
                            </dd>
                          </dl>
                          <button type="button" className={style.buttonSummary}>
                            Резюме
                          </button>
                        </div>
                      </li>
                    )
                  );
                })}
              </ul>
            </>
          )}
          {data.some((book) => book.status === "readingNow") && (
            <>
              <h1 className={style.title}>Читаю</h1>
              <ul className={style.list}>
                {data.map((book) => {
                  return (
                    book.status === "readingNow" && (
                      <li key={book.id} className={style.item}>
                        <div className={style.icon}>
                          <HandySvg
                            src={orangeIconLibrary}
                            width="22px"
                            height="17px"
                          />
                        </div>
                        <div>
                          <h2 className={style.bookName}>{book.title}</h2>
                          <dl className={style.description}>
                            <dt className={style.key}>Автор:</dt>
                            <dd className={style.property}>{book.author}</dd>
                          </dl>
                          <dl className={style.description}>
                            <dt className={style.key}>Рік:</dt>
                            <dd className={style.property}>
                              {book.publicDate}
                            </dd>
                          </dl>
                          <dl className={style.description}>
                            <dt className={style.key}>Стор.:</dt>
                            <dd className={style.property}>
                              {book.amountPages}
                            </dd>
                          </dl>
                        </div>
                      </li>
                    )
                  );
                })}
              </ul>
            </>
          )}
          {data.some((book) => book.status === "goingToRead") && (
            <>
              <h1 className={style.title}>Маю намір прочитати</h1>
              <ul className={style.list}>
                {data.map((book) => {
                  return (
                    book.status === "goingToRead" && (
                      <li key={book.id} className={style.item}>
                        <div className={style.icon}>
                          <HandySvg
                            src={iconLibrary}
                            width="22px"
                            height="17px"
                          />
                        </div>
                        <div>
                          <h2 className={style.bookName}>{book.title}</h2>
                          <dl className={style.description}>
                            <dt className={style.key}>Автор:</dt>
                            <dd className={style.property}>{book.author}</dd>
                          </dl>
                          <dl className={style.description}>
                            <dt className={style.key}>Рік:</dt>
                            <dd className={style.property}>
                              {book.publicDate}
                            </dd>
                          </dl>
                          <dl className={style.description}>
                            <dt className={style.key}>Стор.:</dt>
                            <dd className={style.property}>
                              {book.amountPages}
                            </dd>
                          </dl>
                        </div>
                      </li>
                    )
                  );
                })}
              </ul>
            </>
          )}
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
          {data.some((book) => book.status === "alreadyRead") && (
            <>
              <h1 className={style.bookListTitle}>Прочитано</h1>
              <div className={style.bookListHeader}>
                <p className={style.alreadyReadTitleHeader}>Назва книги</p>
                <p className={style.alreadyReadAuthorHeader}>Автор</p>
                <p className={style.alreadyReadPublicDateHeader}>Рік</p>
                <p className={style.alreadyReadAmountPagesHeader}>Стор.</p>
                <p>Рейтинг</p>
              </div>
              <ul className={style.bookList}>
                {data.map((book) => {
                  return (
                    book.status === "alreadyRead" && (
                      <li key={book.id} className={style.bookItem}>
                        <div className={style.bookIcon}>
                          <HandySvg
                            src={iconLibrary}
                            width="22px"
                            height="17px"
                          />
                        </div>
                        <p className={style.alreadyReadBookTitle}>
                          {book.title}
                        </p>
                        <p className={style.alreadyReadBookAuthor}>
                          {book.author}
                        </p>
                        <p className={style.alreadyReadBookPublicDate}>
                          {book.publicDate}
                        </p>
                        <p className={style.alreadyReadBookAmountPages}>
                          {book.amountPages}
                        </p>
                        <Rating
                          className={style.alreadyReadBookRating}
                          name="read-only"
                          value={book.rating}
                          readOnly
                        />
                        <button
                          type="button"
                          className={style.alreadyReadBookButtonSummary}
                        >
                          Резюме
                        </button>
                      </li>
                    )
                  );
                })}
              </ul>
            </>
          )}
          {data.some((book) => book.status === "readingNow") && (
            <>
              <h1 className={style.bookListTitle}>Читаю</h1>
              <div className={style.bookListHeader}>
                <p className={style.bookTitleHeader}>Назва книги</p>
                <p className={style.bookAuthorHeader}>Автор</p>
                <p className={style.bookAgeHeader}>Рік</p>
                <p>Стор.</p>
              </div>
              <ul className={style.bookList}>
                {data.map((book) => {
                  return (
                    book.status === "readingNow" && (
                      <li key={book.id} className={style.bookItem}>
                        <div className={style.bookIcon}>
                          <HandySvg
                            src={orangeIconLibrary}
                            width="22px"
                            height="17px"
                          />
                        </div>
                        <p className={style.bookTitle}>{book.title}</p>
                        <p className={style.bookAuthor}>{book.author}</p>
                        <p className={style.bookPublicDate}>
                          {book.publicDate}
                        </p>
                        <p>{book.amountPages}</p>
                      </li>
                    )
                  );
                })}
              </ul>
            </>
          )}
          {data.some((book) => book.status === "goingToRead") && (
            <>
              <h1 className={style.bookListTitle}>Маю намір прочитати</h1>
              <div className={style.bookListHeader}>
                <p className={style.bookTitleHeader}>Назва книги</p>
                <p className={style.bookAuthorHeader}>Автор</p>
                <p className={style.bookAgeHeader}>Рік</p>
                <p>Стор.</p>
              </div>
              <ul className={style.bookList}>
                {data.map((book) => {
                  return (
                    book.status === "goingToRead" && (
                      <li key={book.id} className={style.bookItem}>
                        <div className={style.bookIcon}>
                          <HandySvg
                            src={iconLibrary}
                            width="22px"
                            height="17px"
                          />
                        </div>
                        <p className={style.bookTitle}>{book.title}</p>
                        <p className={style.bookAuthor}>{book.author}</p>
                        <p className={style.bookPublicDate}>
                          {book.publicDate}
                        </p>
                        <p>{book.amountPages}</p>
                      </li>
                    )
                  );
                })}
              </ul>
            </>
          )}
          <button
            type="button"
            className={style.buttonTraining}
            onClick={handleMyTraining}
          >
            Моє тренування
          </button>
        </div>
      </Tablet>
      <Desktop>
        <div className={style.container}>
          {data.some((book) => book.status === "alreadyRead") && (
            <>
              <h1 className={style.bookListTitle}>Прочитано</h1>
              <div className={style.bookListHeader}>
                <p className={style.alreadyReadTitleHeader}>Назва книги</p>
                <p className={style.alreadyReadAuthorHeader}>Автор</p>
                <p className={style.alreadyReadPublicDateHeader}>Рік</p>
                <p className={style.alreadyReadAmountPagesHeader}>Стор.</p>
                <p>Рейтинг книги</p>
              </div>
              <ul className={style.bookList}>
                {data.map((book) => {
                  return (
                    book.status === "alreadyRead" && (
                      <li key={book.id} className={style.bookItem}>
                        <div className={style.bookIcon}>
                          <HandySvg
                            src={iconLibrary}
                            width="22px"
                            height="17px"
                          />
                        </div>
                        <p className={style.alreadyReadBookTitle}>
                          {book.title}
                        </p>
                        <p className={style.alreadyReadBookAuthor}>
                          {book.author}
                        </p>
                        <p className={style.alreadyReadBookPublicDate}>
                          {book.publicDate}
                        </p>
                        <p className={style.alreadyReadBookAmountPages}>
                          {book.amountPages}
                        </p>
                        <Rating
                          className={style.alreadyReadBookRating}
                          name="read-only"
                          value={book.rating}
                          readOnly
                        />
                        <button
                          type="button"
                          className={style.alreadyReadBookButtonSummary}
                        >
                          Резюме
                        </button>
                      </li>
                    )
                  );
                })}
              </ul>
            </>
          )}
          {data.some((book) => book.status === "readingNow") && (
            <>
              <h1 className={style.bookListTitle}>Читаю</h1>
              <div className={style.bookListHeader}>
                <p className={style.bookTitleHeader}>Назва книги</p>
                <p className={style.bookAuthorHeader}>Автор</p>
                <p className={style.bookAgeHeader}>Рік</p>
                <p>Стор.</p>
              </div>
              <ul className={style.bookList}>
                {data.map((book) => {
                  return (
                    book.status === "readingNow" && (
                      <li key={book.id} className={style.bookItem}>
                        <div className={style.bookIcon}>
                          <HandySvg
                            src={orangeIconLibrary}
                            width="22px"
                            height="17px"
                          />
                        </div>
                        <p className={style.bookTitle}>{book.title}</p>
                        <p className={style.bookAuthor}>{book.author}</p>
                        <p className={style.bookPublicDate}>
                          {book.publicDate}
                        </p>
                        <p>{book.amountPages}</p>
                      </li>
                    )
                  );
                })}
              </ul>
            </>
          )}
          {data.some((book) => book.status === "goingToRead") && (
            <>
              <h1 className={style.bookListTitle}>Маю намір прочитати</h1>
              <div className={style.bookListHeader}>
                <p className={style.bookTitleHeader}>Назва книги</p>
                <p className={style.bookAuthorHeader}>Автор</p>
                <p className={style.bookAgeHeader}>Рік</p>
                <p>Стор.</p>
              </div>
              <ul className={style.bookList}>
                {data.map((book) => {
                  return (
                    book.status === "goingToRead" && (
                      <li key={book.id} className={style.bookItem}>
                        <div className={style.bookIcon}>
                          <HandySvg
                            src={iconLibrary}
                            width="22px"
                            height="17px"
                          />
                        </div>
                        <p className={style.bookTitle}>{book.title}</p>
                        <p className={style.bookAuthor}>{book.author}</p>
                        <p className={style.bookPublicDate}>
                          {book.publicDate}
                        </p>
                        <p>{book.amountPages}</p>
                      </li>
                    )
                  );
                })}
              </ul>
            </>
          )}
          <button
            type="button"
            className={style.buttonTraining}
            onClick={handleMyTraining}
          >
            Моє тренування
          </button>
        </div>
      </Desktop>
    </>
  );
};
