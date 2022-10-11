import React from "react";
import BookList from "../BookList/BookList";
import BookSelector from "../BookSelector/BookSelector";
import s from "../Training/Training.module.css";
import DateInputEl from "../DateInputEl/DateInputEl";
import { useState } from "react";
import Icon from "../../img/icon library.svg";
import iconBack from "../../img/back.svg";
import { HandySvg } from "handy-svg";
import Goals from "../Goals/Goals";
import { Chart } from "../Chart/Chart";
import TableMin from "../TableMin/TableMin";
import * as booksAPI from "../../services/booksAPI";
import * as trainingAPI from "../../services/trainingAPI";
import Media from "react-media";
import { useNavigate } from "react-router-dom";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents.js";
import iconButton from "../../img/more.svg";


function Training() {
  // дати в мілісекундах
  const [startDate, setStartDate] = useState(
    JSON.parse(localStorage.getItem("startDate")) || 0
  );
  const [finishDate, setEndDate] = useState(
    JSON.parse(localStorage.getItem("endDate")) || 0
  );
  // дати в датах для відображення в календарі
  const [startDate2, setStartDate2] = useState(
    JSON.parse(localStorage.getItem("startDate2")) || null
  );
  const [finishDate2, setEndDate2] = useState(
    JSON.parse(localStorage.getItem("endDate2")) || null
  );
  // Книжка в полі селект
  const [selectedBook, setSelectedBook] = useState();
  // Обрані книжки для відправки на бек
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books")) || []
  );
  // неправильно введені дати, книжки
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const [status, setStatus] = useState(false)

  const [formAddBook, setFormAddBook] = useState(false);

  const [addTrain] = trainingAPI.useAddTrainMutation();
  const navigate = useNavigate();


  const getFormAddBook = () => {
    setFormAddBook(!formAddBook);
  };
  // Отримати масив книг
  let backResponce = [
    { id: "", title: "", author: "", publicDate: 0, amountPages: 0 },
  ];
  let BooksInProgress = [];
  const { data } = booksAPI.useGetAllBookQuery();

  // фільтрація по статусу
  if (data) {
    const filtered = data.result.filter((e) => e.status === "goingToRead");
    backResponce = filtered;
    // backResponce = data.result;
    BooksInProgress = data.result.filter((e) => e.status === "readingNow");
  }

  // Кнопка видалити
  const handleDelete = (id) => {
    setBooks(books.filter((e) => e._id !== id));
  };

  // Обробка стартової дати
  const handleChangeStart = (e) => {
    const date = Date.parse(e);
    setStartDate(date);
    setStartDate2(e);
    setError(false);
    localStorage["startDate"] = JSON.stringify(date);
    localStorage["startDate2"] = JSON.stringify(e);
  };

  // Обробка кінцевої дати
  const handleChangeEnd = (e) => {
    const date = Date.parse(e);
    setError(false);
    setError2(false);
    if (date <= startDate) {
      setError(true);
      return;
    }
    setEndDate(date);
    setEndDate2(e);
    localStorage["endDate"] = JSON.stringify(date);
    localStorage["endDate2"] = JSON.stringify(e);
  };

  // Обробка списку книг з беку для селекту
  let sel2 = [];

  if (backResponce) {
    const sel = JSON.parse(
      JSON.stringify(backResponce).replaceAll("_id", "value")
    );
    sel2 = JSON.parse(JSON.stringify(sel).replaceAll("title", "label"));

    if (books) {
      for (let i = 0; i < books.length; i++) {
        for (let j = 0; j < sel2.length; j++) {
          if (books[i]._id === sel2[j].value) {
            sel2.splice([j], 1);
          }
        }
      }
    }
  }

  const onChangeHandle = (e) => {
    setSelectedBook(e.value);
    setStatus(false)
  };

  // додавання книги в таблицю
  const onClickHandle = () => {
    setError(false);
    setError2(false);
    setStatus(true)
    const existBook = books.filter((e) => e._id === selectedBook);
    if (existBook.length > 0) {
      return;
    } else {
      const selBook = backResponce.filter((e) => e._id === selectedBook);
      setBooks([...books, ...selBook]);
      
      localStorage["books"] = JSON.stringify(books);
    }
    getFormAddBook()
  };

  localStorage["books"] = JSON.stringify(books);
  // Обєкт для відпавки на бек

  const book = [];

  const handleBeforeSubmit = () => {
    if (books.length > 0) {
      books.forEach((e) => {
        const id = e._id;
        book.push(id);
      });
    }
  };
  handleBeforeSubmit();

  const newTraining = { startDate, finishDate, book };

  // Кнопка почати тренування
  const handleSubmit = async () => {
    if (BooksInProgress.length > 0) {
      setError2(true);
      return;
    }
    if (!startDate || !finishDate || book.length === 0) {
      setError(true);
      return;
    }

    if (
      startDate > finishDate ||
      Math.floor((finishDate - startDate) / (1000 * 60 * 60 * 24)) > 31
    ) {
      setError(true);
      return;
    }

    if (newTraining) {
      await addTrain(newTraining);
      localStorage.removeItem("books");
      localStorage.removeItem("startDate");
      localStorage.removeItem("startDate2");
      localStorage.removeItem("endDate");
      localStorage.removeItem("endDate2");
      navigate("/statistics", { replace: true });
    }
  };

  // дані для компоненту Goals (моя мета прочитати)

  var days = 0;
  if (startDate && finishDate) {
    days = Math.floor((finishDate - startDate) / (1000 * 60 * 60 * 24));
  }

  var amount = 0;
  if (books) {
    amount = books.length;
  }

  const goalsData = [
    { type: "books", value: `${amount}`, text: "Кількість книжок" },
    { type: "days", value: `${days}`, text: "Кількість днів" },
  ];

  return (<>
    <Mobile>
    {formAddBook ? (
          <>
           
          <div className={s.training}>
          <HandySvg
                    src={iconBack}
                    className = {s.iconBack}
                    width="24px"
                    height="12px"
                    onClick={getFormAddBook}
                  />
    <div className={s.reverse}>
      <div className={s.bigwrapper}>
        <div className={s.wrapper}>
          <h3 className={s.text}> Моє тренування </h3>
        </div>
      
        <div className={s.dateInput}>
          <DateInputEl
            placeholder={"Початок"}
            minDate={new Date()}
            value={startDate2}
            onChange={handleChangeStart}
          />
          <DateInputEl
            placeholder={"Завершення"}
            minDate={new Date()}
            value={finishDate2}
            onChange={handleChangeEnd}
          />
        </div>
        <BookSelector
          onClickHandle={onClickHandle}
          onChangeHandle={onChangeHandle}
          book={sel2}
          statusInput = {status}
          getFormAddBook={getFormAddBook}
        />
        
          
      </div>
    </div>
   
  </div>
        </>
        ) : (
          <>
            <div className={s.training}>
      <div className={s.reverse}>
        <Goals data={goalsData} />
        <div className={s.bigwrapper}>
          <div className={s.wrapper}>
            <h3 className={s.text}> Моє тренування </h3>
          </div>
          
          
          <Media
            query="(max-width: 767px)"
            render={() => (
              <TableMin
                data={books}
                handleDelete={handleDelete}
                cellItem={<HandySvg src={Icon} className={s.svg_1} />}
              />
            )}
          />
          <Media
            query="(min-width: 768px)"
            render={() => (
              <BookList
                data={books}
                handleDelete={handleDelete}
                cellItem={<HandySvg src={Icon} className={s.svg_1} />}
              />
            )}
          />
        </div>
      </div>
      <div className={s.lower}>
      {error && (
          <p className={s.redText}>
            Введіть коректно дати та оберіть книжки: термін тренування має
            бути не менше одного дня та не більше 31 дня{" "}
          </p>
        )}
        {error2 && (
          <p className={s.redText}> Завершіть попередні тренування </p>
        )}
        <button type="button" className={s.button} disabled={true}>
          <span className={s.buttonText} onClick={handleSubmit}>
            Почати тренування
          </span>
        </button>
        <Chart getFormAddBook={getFormAddBook}/>
        <HandySvg
              className={s.buttonMore}
              src={iconButton}
              width="52px"
              height="52px"
              onClick={getFormAddBook}
            />
      </div>
    </div>
          </>
        )}
    </Mobile>
    <Tablet>
<div className={s.training}>
      <div className={s.reverse}>
        <Goals data={goalsData} />
        <div className={s.bigwrapper}>
          <div className={s.wrapper}>
            <h3 className={s.text}> Моє тренування </h3>
          </div>
          {error && (
            <p className={s.redText}>
              Введіть коректно дати та оберіть книжки: термін тренування має
              бути не менше одного дня та не більше 31 дня{" "}
            </p>
          )}
          <div className={s.dateInput}>
            <DateInputEl
              placeholder={"Початок"}
              minDate={new Date()}
              value={startDate2}
              onChange={handleChangeStart}
            />
            <DateInputEl
              placeholder={"Завершення"}
              minDate={new Date()}
              value={finishDate2}
              onChange={handleChangeEnd}
            />
          </div>
          <BookSelector
            onClickHandle={onClickHandle}
            onChangeHandle={onChangeHandle}
            book={sel2}
            statusInput = {status}
          />
          <Media
            query="(max-width: 767px)"
            render={() => (
              <TableMin
                data={books}
                handleDelete={handleDelete}
                cellItem={<HandySvg src={Icon} className={s.svg_1} />}
              />
            )}
          />
          <Media
            query="(min-width: 768px)"
            render={() => (
              <BookList
                data={books}
                handleDelete={handleDelete}
                cellItem={<HandySvg src={Icon} className={s.svg_1} />}
              />
            )}
          />
        </div>
      </div>
      <div className={s.lower}>
        {error2 && (
          <p className={s.redText}> Завершіть попередні тренування </p>
        )}
        <button type="button" className={s.button} disabled={true}>
          <span className={s.buttonText} onClick={handleSubmit}>
            Почати тренування
          </span>
        </button>
        <Chart />
      </div>
    </div>
    </Tablet>
    <Desktop>
    <div className={s.training}>
      <div className={s.reverse}>
        <Goals data={goalsData} />
        <div className={s.bigwrapper}>
          <div className={s.wrapper}>
            <h3 className={s.text}> Моє тренування </h3>
          </div>
          {error && (
            <p className={s.redText}>
              Введіть коректно дати та оберіть книжки: термін тренування має
              бути не менше одного дня та не більше 31 дня{" "}
            </p>
          )}
          <div className={s.dateInput}>
            <DateInputEl
              placeholder={"Початок"}
              minDate={new Date()}
              value={startDate2}
              onChange={handleChangeStart}
            />
            <DateInputEl
              placeholder={"Завершення"}
              minDate={new Date()}
              value={finishDate2}
              onChange={handleChangeEnd}
            />
          </div>
          <BookSelector
            onClickHandle={onClickHandle}
            onChangeHandle={onChangeHandle}
            book={sel2}
            statusInput = {status}
          />
          <Media
            query="(max-width: 767px)"
            render={() => (
              <TableMin
                data={books}
                handleDelete={handleDelete}
                cellItem={<HandySvg src={Icon} className={s.svg_1} />}
              />
            )}
          />
          <Media
            query="(min-width: 768px)"
            render={() => (
              <BookList
                data={books}
                handleDelete={handleDelete}
                cellItem={<HandySvg src={Icon} className={s.svg_1} />}
              />
            )}
          />
        </div>
      </div>
      <div className={s.lower}>
        {error2 && (
          <p className={s.redText}> Завершіть попередні тренування </p>
        )}
        <button type="button" className={s.button} disabled={true}>
          <span className={s.buttonText} onClick={handleSubmit}>
            Почати тренування
          </span>
        </button>
        <Chart />
      </div>
    </div>
     </Desktop>
     </>
  );
}

export default Training;
