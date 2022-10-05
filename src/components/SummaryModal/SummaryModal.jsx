import s from "./SummaryModal.module.css";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import { useFormik } from "formik";
import * as booksAPI from "../../services/booksAPI";
// import orangeStar from "./../../img/orange star.svg";
// import greyStar from "./../../img/grey star.svg";
import { Rating } from "@mui/material";
// import { useState } from "react";
// import TextField from "@mui/material/TextField";

export const LibraryModalAddRating = ({ closeSummaryModal, id }) => {
  const [updateBook] = booksAPI.useUpdateBookMutation();

  const handleSubmit = async (data, actions) => {
    console.log(data);
    if (data) {
      console.log(data);
      await updateBook(data).unwrap();
      actions.resetForm();
    }
    closeSummaryModal();
  };

  const formik = useFormik({
    initialValues: {
      _id: id,
      rating: 0,
      resume: "",
    },

    onSubmit: handleSubmit,
  });
  return (
    <>
      <Mobile>
        <div className={s.backdrop}>
          <form onSubmit={formik.handleSubmit}>
            <div className={s.modal}>
              <p className={s.text_rating}>Обрати рейтинг книги</p>
              <Rating
                id="rating"
                name="rating"
                type="number"
                value={Number(formik.values.rating)}
                onChange={formik.handleChange}
              />
              <p className={s.text_resume}>Резюме</p>
              {/* <TextField className={s.TextField} placeholder="..." maxRows={7} /> */}
              <textarea
                className={s.TextField}
                values={formik.values.resume}
                id="resume"
                name="resume"
                type="text"
                placeholder="..."
                onChange={formik.handleChange}
              ></textarea>
              <div className={s.buttonsContainer}>
                <button
                  className={s.button}
                  type="button"
                  onClick={closeSummaryModal}
                >
                  Назад
                </button>
                <button className={s.button} type="submit">
                  Зберегти
                </button>
              </div>
            </div>
          </form>
        </div>
      </Mobile>
      <Tablet>
        <div className={s.backdrop}>
          <form onSubmit={formik.handleSubmit}>
            <div className={s.modal}>
              <p className={s.text_rating}>Обрати рейтинг книги</p>
              <Rating
                id="rating"
                name="rating"
                type="number"
                value={Number(formik.values.rating)}
                onChange={formik.handleChange}
              />
              <p className={s.text_resume}>Резюме</p>
              {/* <TextField className={s.TextField} placeholder="..." maxRows={7} /> */}
              <textarea
                className={s.TextField}
                values={formik.values.resume}
                id="resume"
                name="resume"
                type="text"
                placeholder="..."
                onChange={formik.handleChange}
              ></textarea>
              <div className={s.buttonsContainer}>
                <button
                  className={s.button}
                  type="button"
                  onClick={closeSummaryModal}
                >
                  Назад
                </button>
                <button className={s.button} type="submit">
                  Зберегти
                </button>
              </div>
            </div>
          </form>
        </div>
      </Tablet>
      <Desktop>
        <div className={s.backdrop}>
          <form onSubmit={formik.handleSubmit}>
            <div className={s.modal}>
              <p className={s.text_rating}>Обрати рейтинг книги</p>
              <Rating
                id="rating"
                name="rating"
                type="number"
                value={Number(formik.values.rating)}
                onChange={formik.handleChange}
              />
              <p className={s.text_resume}>Резюме</p>
              {/* <TextField className={s.TextField} placeholder="..." maxRows={7} /> */}
              <textarea
                className={s.TextField}
                values={formik.values.resume}
                id="resume"
                name="resume"
                type="text"
                placeholder="..."
                onChange={formik.handleChange}
              ></textarea>
              <div className={s.buttonsContainer}>
                <button
                  className={s.button}
                  type="button"
                  onClick={closeSummaryModal}
                >
                  Назад
                </button>
                <button className={s.button} type="submit">
                  Зберегти
                </button>
              </div>
            </div>
          </form>
        </div>
      </Desktop>
    </>
  );
};
