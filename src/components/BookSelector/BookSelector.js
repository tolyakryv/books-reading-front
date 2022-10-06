
import React from 'react'
import Select from 'react-select'
import s from "../BookSelector/BookSelector.module.css"




export default function BookSelector({placeholder = "Обрати книгу", onClickHandle, onChangeHandle, book}){
      
      
        return (
        <div className={s.wrapper}>
          <Select className={s.selector} options = {book} onChange = {onChangeHandle}  placeholder = {placeholder}/>
          <button className={s.button} type = "button" onClick={onClickHandle}><span className={s.text}>Додати</span></button>
</div>
          
   
      );
}
