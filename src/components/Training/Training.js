import React from 'react';
import { useState } from 'react';
import { DateInput } from "@blueprintjs/datetime";
import "../Training/Training.css";



export default function Training() {
  const [date, setDate] = useState('');

  const handleDateChange = e => {
       console.log(e)
       setDate(e);
       
  }
  console.log(date)
  console.log(DateInput)
  return (
      <DateInput
    formatDate={date => date.toLocaleString()}
    parseDate={str => new Date(str)}
    highlightCurrentDay = "true"
    onChange={handleDateChange}
    
       
        />
     

  );
}