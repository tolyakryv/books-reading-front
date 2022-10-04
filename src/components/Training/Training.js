import React from "react";
import BookList from "../BookList/BookList";
import BookSelector from "../BookSelector/BookSelector";
import s from "../Training/Training.module.css";
import DateInputEl from "../DateInputEl/DateInputEl";
import { useState } from "react";
import Icon from "../../img/icon library.svg";
import { HandySvg } from "handy-svg";
import Goals from "../Goals/Goals";


const defaultData = [
  { id: 1111, Title: "Book 1", Author: "Author", Year: 2021, pages: 100 },
  { id: 121, Title: "Book 2", Author: "Author", Year: 2021, pages: 101 },
  { id: 321, Title: "Book", Author: "Author", Year: 2021, pages: 102 },
  { id: 65, Title: "..." },
];

function Training() {
  // дати в мілісекундах
  const [startDate, setStartDate] = useState();
  const [finishDate, setEndDate] = useState();
  // дати в датах для відображення в календарі
  const [startDate2, setStartDate2] = useState();
  const [finishDate2, setEndDate2] = useState();
  // Масив книжок з беку для вибоу
  const [initialbooks, setInitialBooks] = useState(defaultData);
  // Книжка в полі селект
  const [selectedBook, setSelectedBook] = useState();
  // Обрані книжки для відправки на бек
  const [books, setBooks] = useState([]);

  // const dispatch = useDispatch();

  // useEffect (() => {
  //   dispatch(fetchBooks());
  // },[dispatch])

  // Кнопка почати тренування
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!startDate || !finishDate || books.length < 1) {
      return alert(`mistake`);
    }
    // dispatch(addTraining(newTraining));
  };

  // Кнопка видалити
  const handleDelete = (id) => {
    setBooks(books.filter((e) => e.id !== id));
  };

  // Обробка стартової дати
  const handleChangeStart = (e) => {
    const date = Date.parse(e);
    setStartDate(date);
    setStartDate2(e);
  };

  // Обробка кінцевої дати
  const handleChangeEnd = (e) => {
    const date = Date.parse(e);
    if(date <= startDate){
      return alert("mistake2")
    }
    setEndDate(date);
    setEndDate2(e);
  };

  // Обробка списку книг з беку для селекту
  const sel = JSON.parse(
    JSON.stringify(initialbooks).replaceAll("id", "value")
  );
  const sel2 = JSON.parse(JSON.stringify(sel).replaceAll("Title", "label"));

  const onChangeHandle = (e) => {
    setSelectedBook(e.value);
  };

  // додавання книги в таблицю
  const onClickHandle = (e) => {
    e.preventDefault();
    setInitialBooks(initialbooks.filter((e) => e.id !== selectedBook));
    const selBook = initialbooks.filter((e) => e.id === selectedBook);

    setBooks([...books, ...selBook]);
  };

  // Обєкт для відпавки на бек

  const newTraining = { startDate, finishDate, books };

  console.log(newTraining);

  // дані для компоненту Goals (моя мета прочитати)

  var days = 0;
  if (startDate && finishDate) {
    days = Math.floor((finishDate - startDate) / (1000 * 60 * 60 * 24));
  }

  var amount = 0;
  if(books){
    amount = books.length;
  }

  const goalsData = [
    { type: "books", value: `${amount}`, text: "Кількість книжок" },
    { type: "days", value: `${days}`, text: "Кількість днів" },
  ];

  return (
    <div className={s.training}>
      <Goals data={goalsData} />
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
        />
        <BookList
          data={books}
          handleDelete={handleDelete}
          cellItem={<HandySvg src={Icon} className={s.svg_1} />}
        />

        <button type="button" className={s.button}>
          <span className={s.buttonText} onClick={handleSubmit}>
            Почати тренування
          </span>
        </button>
      </div>
    </div>
  );
}

export default Training;
