// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

// import * as Yup from "yup";
import * as booksAPI from "../../services/booksAPI";
import s from "./FormAddBook.module.css";
// import { userSelector } from "../../redux/selector/user-selector";

// const addBookSchema = Yup.object().shape({
//   title: Yup.string().max(50).required(),
//   author: Yup.string().max(50).required(),
//   publicDate: Yup.number().max(4).integer(),
//   amountPages: Yup.number().max(4).integer().required(),
// });
// console.log(booksAPI);
export const FormAddBook = () => {
  const newBookTemplate = {
    title: "",
    author: "",
    publicDate: 1900,
    amountPages: 0,
  };
  const [addBook] = booksAPI.useAddBookMutation();
  const handleSubmit = async (data) => {
    if (data) {
      localStorage.setItem("newBook", JSON.stringify([data]));
      await addBook(data).unwrap();
    }
  };
  const formik = useFormik({
    initialValues: newBookTemplate,
    // validationSchema: Yup.object().shape({
    //   title: Yup.string().max(50).required(),
    //   author: Yup.string().max(50).required(),
    //   publicDate: Yup.number().max(4).integer(),
    //   amountPages: Yup.number().max(4).integer().required(),
    // }),
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
