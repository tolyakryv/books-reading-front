import React from "react";
import DateRangeInput from "../DateRangeInput/DateRangeInput";
import BookList from "../BookList/BookList";
import BookSelector from "../BookSelector/BookSelector";

function Training() {
  return (
    <div>
      <h3> Моє тренування </h3>
      <DateRangeInput />
      <BookSelector/>
      <BookList />
    </div>
  );
}

export default Training;
