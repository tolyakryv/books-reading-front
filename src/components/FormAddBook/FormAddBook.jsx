// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import * as Yup from "yup";
import * as booksAPI from "../../services/booksAPI";
import s from "./FormAddBook.module.css";
// import { userSelector } from "../../redux/selector/user-selector";

export const FormAddBook = () => {
  const newBookTemplate = {
    title: "",
    author: "",
    publicDate: 1900,
    amountPages: 0,
  };
  const addBookSchema = Yup.object({
    title: Yup.string().min(2).max(50).required(),
    author: Yup.string().max(50).required(),
    publicDate: Yup.number().min(1900).max(2021).integer().positive(),
    amountPages: Yup.number().min(20).max(1500).integer().positive().required(),
  });
  const [addBook] = booksAPI.useAddBookMutation();
  const handleSubmit = async (data, actions) => {
    if (data) {
      await addBook(data).unwrap();
      actions.resetForm();
      const bookLocal = JSON.parse(localStorage.getItem("newBook"));
      if (bookLocal) {
        localStorage.setItem("newBook", JSON.stringify([...bookLocal, data]));
      } else {
        localStorage.setItem("newBook", JSON.stringify([data]));
      }
    }
  };
  const formik = useFormik({
    initialValues: newBookTemplate,
    validationSchema: addBookSchema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className={s.form}>
          <label className={s.label} htmlFor="title">
            Назва книги
          </label>
          <input
            className={s.input}
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
          />

          <label className={s.label} htmlFor="author">
            Автор
          </label>
          <input
            className={s.input}
            id="author"
            name="author"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.author}
          />

          <label className={s.label} htmlFor="publicDate">
            Рік випуску
          </label>
          <input
            className={s.input}
            id="publicDate"
            name="publicDate"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.publicDate}
          />
          <label className={s.label} htmlFor="amountPages">
            Кількість сторінок
          </label>
          <input
            className={s.input}
            id="amountPages"
            name="amountPages"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.amountPages}
          />

          <button className={s.button} type="submit">
            Додати
          </button>
        </div>
      </form>
    </>
  );
};
