import React from "react";
import BookList from "../BookList/BookList";
import BookSelector from "../BookSelector/BookSelector";
import s from "../Training/Training.module.css"
import DateInputEl from "../DateInputEl/DateInputEl";
import { useState } from 'react';

const defaultData = [
  {id: 1111,
    Title: 'Book 1',
    Author: 'Author',
    Year: 2021,
    pages: 100,
  },
  {id:121,
    Title: 'Book 2',
    Author: 'Author',
    Year: 2021,
    pages: 101,
  },
  {id:321,
    Title: 'Book',
    Author: 'Author',
    Year: 2021,
    pages: 102,
  },
{id: 65,
  Title: "..."
}]



function Training() {

  const [startDate, setStartDate] = useState() 
  const [finishDate, setEndDate] = useState()
  const [startDate2, setStartDate2] = useState() 
  const [finishDate2, setEndDate2] = useState()
  const [initialbooks, setInitialBooks] = useState(defaultData);
  const [selectedBook, setSelectedBook] = useState()
  const [books, setBooks] = React.useState(() => [...defaultData])

  const handleDelete = (id) =>{setBooks(books.filter(e => e.id !==id));
  }   
 
  const handleChangeStart = (e) => {
    const date = Date.parse(e)
      setStartDate(date)
      setStartDate2(e)
  };

  const handleChangeEnd = (e) => {
  const date = Date.parse(e)
  setEndDate(date)
setEndDate2(e)}

const sel = JSON.parse(JSON.stringify(initialbooks).replaceAll('id', 'value'))
const sel2 = JSON.parse(JSON.stringify(sel).replaceAll('Title', 'label'))

const onChangeHandle = e => {setSelectedBook(e.value)} 


const onClickHandle = e => {
    e.preventDefault();
    setInitialBooks(initialbooks.filter(e => e.id !== selectedBook))
    const selBook = initialbooks.filter(e => e.id === selectedBook)
   
    setBooks([...books, ...selBook])}
    
 

  const newTraining ={startDate, finishDate, books}
  console.log(newTraining)
 

  return (
    <div className={s.training}>
      <div className={s.bigwrapper}>
      <div className={s.wrapper}>
      <h3 className={s.text}> Моє тренування </h3>
      </div>
      <div className={s.dateInput}>
      <DateInputEl  placeholder={"Початок"} minDate ={new Date()} value={startDate2} onChange={handleChangeStart} />
      <DateInputEl  placeholder={"Завершення"} minDate ={new Date()} value={finishDate2} onChange={handleChangeEnd} />
      </div>
      <BookSelector onClickHandle = {onClickHandle} onChangeHandle={onChangeHandle} book={sel2}/>
      <BookList data={books} handleDelete={handleDelete}/>
      
      <button type="button" className={s.button}><span className={s.buttonText}>Почати тренування</span></button>
    </div>
    </div>
  );
}

export default Training