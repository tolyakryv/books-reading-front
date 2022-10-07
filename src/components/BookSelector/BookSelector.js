import React from "react";
import Select from "react-select";
import s from "../BookSelector/BookSelector.module.css";


export default function BookSelector({
  placeholder = "Обрати книгу",
  onClickHandle,
  onChangeHandle,
  book,
  statusInput
}) 


{     

      const customStyles = {
            input: () => {
                  const visibility = "hidden"
                  return {visibility}
                },
      
            singleValue:() => {
      
        const color = (statusInput === true) ? "white" : "black"; 
        const justifyContent = "center"
    
        return { color, justifyContent };
      }}
  return (
    <div className={s.wrapper}>
      <Select
        className={s.selector}
        options={book}
        onChange={onChangeHandle}
        placeholder={placeholder}  
        styles={customStyles}
        
       
        
      />
      <button className={s.button} type="button" onClick={onClickHandle}>
        <span className={s.text}>Додати</span>
      </button>
    </div>
  );
}
