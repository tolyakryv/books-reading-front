import s from "./SummaryModal.module.css";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import { useFormik } from "formik";
import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";
import operation from "../../redux/operation/books-operation";

export const LibraryModalAddRating = ({ closeSummaryModal, id }) => {
  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    if (data) {
      closeSummaryModal();
      dispatch(operation.addSummary(data));
    }
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
                minlength="1"
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
                minlength="1"
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
                minlength="1"
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
