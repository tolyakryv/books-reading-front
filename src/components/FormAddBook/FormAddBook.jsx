import React from "react";
import { useFormik } from "formik";
// import * as Yup from "yup";
import s from "./FormAddBook.module.css";

// const addBookSchema = Yup.object().shape({
//   title: Yup.string().max(50).required(),
//   author: Yup.string().max(50).required(),
//   publicDate: Yup.number().max(4).integer(),
//   amountPages: Yup.number().max(4).integer().required(),
// });
export const FormAddBook = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      publicDate: null,
      amountPages: null,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
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
