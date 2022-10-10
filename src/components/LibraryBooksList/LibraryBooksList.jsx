import iconLibrary from "../../img/icon library.svg";
import iconButton from "../../img/more.svg";
import orangeIconLibrary from "../../img/orange library.svg";
import { HandySvg } from "handy-svg";
import style from "./LibraryBooksList.module.css";
import { useNavigate } from "react-router-dom";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import { Rating } from "@mui/material";
import { LibraryModalAddRating } from "../SummaryModal/SummaryModal";
import { useState } from "react";
import { LibraryModalOnFirstUse } from "../LibraryModalOnFirstUse/LibraryModalOnFirstUse";
import EllipsisText from "react-ellipsis-text";

export const LibraryBooksList = ({ getFormAddBook, data }) => {
  const navigate = useNavigate();
  const [isSummaryModal, setIsSummaryModal] = useState(false);
  const [currentIdBooksSummary, setCurrentIdBooksSummary] = useState(null);
  const [currentResumeBooksSummary, setCurrentResumeBooksSummary] =
    useState(null);
  const [currentRatingBooksSummary, setCurrentRatingBooksSummary] =
    useState(null);
  const handleMyTraining = () => {
    const readingNow = data.filter((e) => e.status === "readingNow");
    if (readingNow.length > 0) {
      navigate("/statistics");
    }
    if (readingNow.length < 1) {
      navigate("/training");
    }
  };

  const closeSummaryModal = () => {
    setIsSummaryModal(false);
  };

  return (
    <>
      <Mobile>
        {data && (
          <div className={style.container}>
            {data.some((book) => book.status === "alreadyRead") && (
              <>
                <h1 className={style.title}>Прочитано</h1>
                <ul className={style.list}>
                  {data.map((book) => {
                    return (
                      book.status === "alreadyRead" && (
                        <li key={book._id} className={style.item}>
                          <div className={style.icon}>
                            <HandySvg
                              src={iconLibrary}
                              width="22px"
                              height="17px"
                            />
                          </div>
                          <div className={style.box}>
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
                            <button
                              type="button"
                              className={
                                book.rating
                                  ? style.buttonSummaryActive
                                  : style.buttonSummary
                              }
                              onClick={() => {
                                setCurrentRatingBooksSummary(book.rating);
                                setCurrentResumeBooksSummary(book.resume);
                                setCurrentIdBooksSummary(book._id);
                                setIsSummaryModal(true);
                              }}
                            >
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
                        <li key={book._id} className={style.item}>
                          <div className={style.icon}>
                            <HandySvg
                              src={orangeIconLibrary}
                              width="22px"
                              height="17px"
                            />
                          </div>
                          <div className={style.box}>
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
                        <li key={book._id} className={style.item}>
                          <div className={style.icon}>
                            <HandySvg
                              src={iconLibrary}
                              width="22px"
                              height="17px"
                            />
                          </div>
                          <div className={style.box}>
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
              onClick={getFormAddBook}
            />
          </div>
        )}
      </Mobile>
      <Tablet>
        {data ? (
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
                        <li key={book._id} className={style.bookItem}>
                          <div className={style.bookIcon}>
                            <HandySvg
                              src={iconLibrary}
                              width="22px"
                              height="17px"
                            />
                          </div>
                          <EllipsisText
                            className={style.alreadyReadBookTitle}
                            text={book.title}
                            length={32}
                          />
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
                            className={
                              book.rating
                                ? style.buttonSummaryActive
                                : style.buttonSummary
                            }
                            onClick={() => {
                              setCurrentRatingBooksSummary(book.rating);
                              setCurrentResumeBooksSummary(book.resume);
                              setCurrentIdBooksSummary(book._id);
                              setIsSummaryModal(true);
                            }}
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
                        <li key={book._id} className={style.bookItem}>
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
                        <li key={book._id} className={style.bookItem}>
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
        ) : (
          <LibraryModalOnFirstUse />
        )}
      </Tablet>
      <Desktop>
        {data ? (
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
                        <li key={book._id} className={style.bookItem}>
                          <div className={style.bookIcon}>
                            <HandySvg
                              src={iconLibrary}
                              width="22px"
                              height="17px"
                            />
                          </div>
                          <EllipsisText
                            className={style.alreadyReadBookTitle}
                            text={book.title}
                            length={32}
                          />
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
                            className={
                              book.rating
                                ? style.buttonSummaryActive
                                : style.buttonSummary
                            }
                            onClick={() => {
                              setCurrentRatingBooksSummary(book.rating);
                              setCurrentResumeBooksSummary(book.resume);
                              setCurrentIdBooksSummary(book._id);
                              setIsSummaryModal(true);
                            }}
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
                        <li key={book._id} className={style.bookItem}>
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
                        <li key={book._id} className={style.bookItem}>
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
        ) : (
          <LibraryModalOnFirstUse />
        )}
      </Desktop>
      {isSummaryModal && (
        <LibraryModalAddRating
          id={currentIdBooksSummary}
          closeSummaryModal={closeSummaryModal}
          resume={currentResumeBooksSummary}
          rating={currentRatingBooksSummary}
        />
      )}
    </>
  );
};
