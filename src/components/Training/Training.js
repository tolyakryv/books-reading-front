import React from "react";
import BookList from "../BookList/BookList";
import BookSelector from "../BookSelector/BookSelector";
import s from "../Training/Training.module.css";
import DateInputEl from "../DateInputEl/DateInputEl";
import { useState } from "react";
import Icon from "../../img/icon library.svg";
import { HandySvg } from "handy-svg";
import Goals from "../Goals/Goals";
import { Chart } from "../Chart/Chart";
import TableMin from "../TableMin/TableMin";
import * as booksAPI from "../../services/booksAPI";
import * as trainingAPI from "../../services/trainingAPI";
import Media from "react-media";
import { useNavigate } from "react-router-dom";

function Training() {
  // дати в мілісекундах
  const [startDate, setStartDate] = useState();
  const [finishDate, setEndDate] = useState();
  // дати в датах для відображення в календарі
  const [startDate2, setStartDate2] = useState();
  const [finishDate2, setEndDate2] = useState();
  // Книжка в полі селект
  const [selectedBook, setSelectedBook] = useState();
  // Обрані книжки для відправки на бек
  const [books, setBooks] = useState([]);
  // неправильно введені дати, книжки
  const [error, setError] = useState(false);

  const [addTrain] = trainingAPI.useAddTrainMutation();

  // Отримати масив книг
  let backResponce = [
    { id: "", title: "", author: "", publicDate: 1, amountPages: 1 },
  ];
  const { data } = booksAPI.useGetAllBookQuery();

  // фільтрація по статусу
  if (data) {
    //  const filtered = data.result.filter(e => e.status === "goingToRead")
    //  backResponce = filtered
    backResponce = data.result;
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
  };

  // Обробка кінцевої дати
  const handleChangeEnd = (e) => {
    const date = Date.parse(e);
    setError(false);
    if (date <= startDate) {
      setError(true);
      return;
    }
    setEndDate(date);
    setEndDate2(e);
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
  };

  // додавання книги в таблицю
  const onClickHandle = () => {
    setError(false);
    const existBook = books.filter((e) => e._id === selectedBook);
    if (existBook.length > 0) {
      return;
    } else {
      const selBook = backResponce.filter((e) => e._id === selectedBook);
      setBooks([...books, ...selBook]);
    }
  };

  // Обєкт для відпавки на бек

  const book = [];

  const handleBeforeSubmit = () => {
    books.forEach((e) => {
      const id = e._id;
      book.push(id);
    });
  };
  handleBeforeSubmit();

  const newTraining = { startDate, finishDate, book };

  const navigate = useNavigate();
  // Кнопка почати тренування
  const handleSubmit = async () => {
    if (!startDate || !finishDate || book.length < 1) {
      setError(true);
      return;
    }
    if (startDate > finishDate) {
      setError(true);
      return;
    }

    if (newTraining) {
      await addTrain(newTraining);
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

  return (
    <div className={s.training}>
      <div className={s.reverse}>
        <Goals data={goalsData} />
        <div className={s.bigwrapper}>
          <div className={s.wrapper}>
            <h3 className={s.text}> Моє тренування </h3>
          </div>
          {error && (
            <p className={s.redText}>Введіть коректно дати та оберіть книжки</p>
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
      <button type="button" className={s.button}>
        <span className={s.buttonText} onClick={handleSubmit}>
          Почати тренування
        </span>
      </button>
      <Chart />
    </div>
  );
}

export default Training;
