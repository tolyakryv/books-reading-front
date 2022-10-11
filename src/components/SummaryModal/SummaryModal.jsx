import s from "./SummaryModal.module.css";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import { useFormik } from "formik";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import operation from "../../redux/operation/books-operation";
import { useEffect } from "react";
export const LibraryModalAddRating = ({
  closeSummaryModal,
  id,
  resume,
  rating,
}) => {
  const dispatch = useDispatch();
  const handleSubmit = (data, actions) => {
    if (data) {
      closeSummaryModal();
      dispatch(operation.addSummary(data));
    }
  };
  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        closeSummaryModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [closeSummaryModal]);

  const clickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      closeSummaryModal();
    }
  };
  const formik = useFormik({
    initialValues: {
      _id: id,
      rating: rating,
      resume: resume,
    },

    onSubmit: handleSubmit,
  });

  return (
    <>
      <Mobile>
        <div className={s.backdrop} onClick={clickBackdrop}>
          <form onSubmit={formik.handleSubmit}>
            <div className={s.modal}>
              <h1 className={s.text_rating}>Обрати рейтинг книги</h1>
              <Rating
                id="rating"
                name="rating"
                type="number"
                value={Number(formik.values.rating)}
                onChange={formik.handleChange}
              />
              <p className={s.text_resume}>Резюме</p>
              <textarea
                className={s.TextField}
                values={formik.values.resume}
                id="resume"
                name="resume"
                type="text"
                placeholder="..."
                defaultValue={resume}
                required={true}
                minLength="1"
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
        <div className={s.backdrop} onClick={clickBackdrop}>
          <form onSubmit={formik.handleSubmit}>
            <div className={s.modal}>
              <h1 className={s.text_rating}>Обрати рейтинг книги</h1>
              <Rating
                id="rating"
                name="rating"
                type="number"
                value={Number(formik.values.rating)}
                onChange={formik.handleChange}
              />
              <p className={s.text_resume}>Резюме</p>
              <textarea
                className={s.TextField}
                values={formik.values.resume}
                id="resume"
                name="resume"
                type="text"
                defaultValue={resume}
                placeholder="..."
                required={true}
                minLength="1"
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
        <div className={s.backdrop} onClick={clickBackdrop}>
          <form onSubmit={formik.handleSubmit}>
            <div className={s.modal}>
              <h1 className={s.text_rating}>Обрати рейтинг книги</h1>
              <Rating
                id="rating"
                name="rating"
                type="number"
                value={Number(formik.values.rating)}
                onChange={formik.handleChange}
              />
              <p className={s.text_resume}>Резюме</p>
              <textarea
                className={s.TextField}
                values={formik.values.resume}
                id="resume"
                name="resume"
                type="text"
                placeholder="..."
                required={true}
                minLength="1"
                defaultValue={resume}
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
