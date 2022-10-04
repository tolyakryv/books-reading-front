import { useFormik } from "formik";
import * as Yup from "yup";
import * as booksAPI from "../../services/booksAPI";
// import { useNavigate } from "react-router-dom";
import { HandySvg } from "handy-svg";
import s from "./FormAddBook.module.css";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import iconBack from "../../img/back.svg";

import { toast } from "react-toastify";
import { userSelector } from "../../redux/selector/user-selector";
import { useEffect } from "react";
import { useSelector } from "react-redux";
export const FormAddBook = () => {
  const isLoading = useSelector(userSelector.getIsLoading);
  const error = useSelector(userSelector.getError);
  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);
  const newBookTemplate = {
    title: "",
    author: "",
    publicDate: 1900,
    amountPages: 0,
  };
  const addBookSchema = Yup.object({
    title: Yup.string()
      .min(2)
      .max(50)
      .required("Необхідно заповнити поле Назва книги"),
    author: Yup.string().max(50).required("Необхідно заповнити поле Автор"),
    publicDate: Yup.number()
      .min(1900)
      .max(2021)
      .integer()
      .positive("число більше нуля"),
    amountPages: Yup.number()
      .min(20)
      .max(1500)
      .integer()
      .positive("кількість сторінок це число більше нуля")
      .required(),
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

  const isDisabled =
    Boolean(
      formik.errors.title ||
        formik.errors.author ||
        formik.errors.publicDate ||
        formik.errors.amountPages
    ) || isLoading;
  return (
    <>
      <Mobile>
        <div className={s.conatainer}>
          <form onSubmit={formik.handleSubmit}>
            <div className={s.form}>
              <div className={s.icon}>
                <HandySvg src={iconBack} width="24px" height="12px" />
              </div>
              <label className={s.label} htmlFor="title">
                Назва книги
              </label>
              <input
                className={s.input}
                id="title"
                name="title"
                type="text"
                placeholder="..."
                required="true"
                onChange={formik.handleChange}
                value={formik.values.title}
                errorText={formik.errors.title}
                showError={formik.touched.title}
                onBlur={formik.handleBlur}
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

              <button className={s.button} disabled={isDisabled} type="submit">
                Додати
              </button>
            </div>
          </form>
        </div>
      </Mobile>
      <Tablet>
        <div className={s.conatainer}>
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
              <div className={s.input_container}>
                <div className={s.input_block_author}>
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
                </div>

                <div className={s.input_block_date}>
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
                </div>
                <div className={s.input_block_pages}>
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
                </div>
              </div>
              <button className={s.button} disabled={isDisabled} type="submit">
                Додати
              </button>
            </div>
          </form>
        </div>
      </Tablet>
      <Desktop>
        <div className={s.conatainer}>
          <form onSubmit={formik.handleSubmit}>
            <div className={s.form}>
              <div className={s.input_container}>
                <div className={s.input_block_title}>
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
                </div>
                <div className={s.input_block_author}>
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
                </div>

                <div className={s.input_block_date}>
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
                </div>
                <div className={s.input_block_pages}>
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
                </div>
                <button
                  className={s.button}
                  disabled={isDisabled}
                  type="submit"
                >
                  Додати
                </button>
              </div>
            </div>
          </form>
        </div>
      </Desktop>
    </>
  );
};
