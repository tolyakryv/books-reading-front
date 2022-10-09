import { useFormik } from "formik";
import { HandySvg } from "handy-svg";
import s from "./FormAddBook.module.css";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import iconBack from "../../img/back.svg";
import { toast } from "react-toastify";
import { userSelector } from "../../redux/selector/user-selector";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import operation from "../../redux/operation/books-operation";
import { addBookSchema } from "../../schemas/addBookSchema";
export const FormAddBook = ({ getFormAddBook, data }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(userSelector.getIsLoading);
  const error = useSelector(userSelector.getError);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  const newBookTemplate = {
    title: "",
    author: "",
    publicDate: 0,
    amountPages: 0,
  };

  const handleSubmit = (data, actions) => {
    if (data) {
      dispatch(operation.addBook(data));
      actions.resetForm();
    }
    getFormAddBook();
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
        // formik.errors.publicDate ||
        formik.errors.amountPages
    ) || isLoading;

  return (
    <>
      <Mobile>
        <div className={s.conatainer}>
          <form onSubmit={formik.handleSubmit}>
            <div className={s.form}>
              <div className={s.icon}>
                {data === undefined || data.length === 0 ? (
                  <></>
                ) : (
                  <HandySvg
                    src={iconBack}
                    width="24px"
                    height="12px"
                    onClick={getFormAddBook}
                  />
                )}
              </div>
              <label className={s.label} htmlFor="title">
                Назва книги*
              </label>
              <input
                className={s.input}
                id="title"
                name="title"
                type="text"
                placeholder="..."
                required={true}
                onChange={formik.handleChange}
                value={formik.values.title}
                onBlur={formik.handleBlur}
              />
              {(formik.errors.title || formik.touched.title) && (
                <p className={s.inputNotifyTitle}>{formik.errors.title}</p>
              )}
              <label className={s.label} htmlFor="author">
                Автор*
              </label>
              <input
                className={s.input}
                id="author"
                name="author"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.author}
              />
              {(formik.errors.author || formik.touched.author) && (
                <p className={s.inputNotifyAuthor}>{formik.errors.author}</p>
              )}
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
              {(formik.errors.publicDate || formik.touched.publicDate) && (
                <p className={s.inputNotifyDate}>{formik.errors.publicDate}</p>
              )}
              <label className={s.label} htmlFor="amountPages">
                Кількість сторінок*
              </label>
              <input
                className={s.input}
                id="amountPages"
                name="amountPages"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.amountPages}
              />
              {(formik.errors.amountPages || formik.touched.amountPages) && (
                <p className={s.inputNotifyPage}>{formik.errors.amountPages}</p>
              )}
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
              {(formik.errors.title || formik.touched.title) && (
                <p className={s.inputNotifyTitle}>{formik.errors.title}</p>
              )}
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
                  {(formik.errors.author || formik.touched.author) && (
                    <p className={s.inputNotifyAuthor}>
                      {formik.errors.author}
                    </p>
                  )}
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
                  {(formik.errors.publicDate || formik.touched.publicDate) && (
                    <p className={s.inputNotifyDate}>
                      {formik.errors.publicDate}
                    </p>
                  )}
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
                  {(formik.errors.amountPages ||
                    formik.touched.amountPages) && (
                    <p className={s.inputNotifyPage}>
                      {formik.errors.amountPages}
                    </p>
                  )}
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
                  {(formik.errors.title || formik.touched.title) && (
                    <p className={s.inputNotifyTitle}>{formik.errors.title}</p>
                  )}
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
                  {(formik.errors.author || formik.touched.author) && (
                    <p className={s.inputNotifyAuthor}>
                      {formik.errors.author}
                    </p>
                  )}
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
                  {(formik.errors.publicDate || formik.touched.publicDate) && (
                    <p className={s.inputNotifyDate}>
                      {formik.errors.publicDate}
                    </p>
                  )}
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
                  {(formik.errors.amountPages ||
                    formik.touched.amountPages) && (
                    <p className={s.inputNotifyPage}>
                      {formik.errors.amountPages}
                    </p>
                  )}
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
