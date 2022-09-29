import { HandySvg } from "handy-svg";
import iconLibrary from "../../img/icon library.svg";
import iconArrow from "../../img/arrow.svg";
import iconFlag from "../../img/flag.svg";
import style from "./LibraryModalOnFirstUse.module.css";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";

const handleButton = () => {
  // ???
};

export const LibraryModalOnFirstUse = () => {
  return (
    <>
      <Mobile>
        <div className={style.modal}>
          <ul className={style.list}>
            <li className={style.item}>
              <h1 className={style.title}>Крок 1.</h1>
              <div className={style.contentContainer}>
                <div className={style.icon}>
                  <HandySvg src={iconLibrary} width="22px" height="17px" />
                </div>
                <div>
                  <h2 className={style.postTitle}>
                    Створіть особисту бібліотеку
                  </h2>
                  <div className={style.descriptionContainer}>
                    <div className={style.iconArrow}>
                      <HandySvg src={iconArrow} width="10px" height="12px" />
                    </div>
                    <p className={style.description}>
                      Додайте до неї книжки, які маєте намір прочитати.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className={style.item}>
              <h1 className={style.title}>Крок 2</h1>
              <div className={style.contentContainer}>
                <div className={style.icon}>
                  <HandySvg src={iconFlag} width="15px" height="17px" />
                </div>
                <div>
                  <h2 className={style.postTitle}>
                    Сформуйте своє перше тренування
                  </h2>
                  <div className={style.descriptionContainer}>
                    <div className={style.iconArrow}>
                      <HandySvg src={iconArrow} width="10px" height="12px" />
                    </div>
                    <p className={style.description}>
                      Визначте ціль, оберіть період, розпочинайте тренування.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className={style.buttonContainer}>
            <button
              className={style.button}
              type="button"
              onClick={handleButton}
            >
              Ok
            </button>
          </div>
        </div>
      </Mobile>
      <Tablet>
        <div className={style.modal}>
          <ul className={style.list}>
            <li className={style.item}>
              <h1 className={style.title}>Крок 1.</h1>
              <div className={style.contentContainer}>
                <div className={style.icon}>
                  <HandySvg src={iconLibrary} width="22px" height="17px" />
                </div>
                <div>
                  <h2 className={style.postTitle}>
                    Створіть особисту бібліотеку
                  </h2>
                  <div className={style.descriptionContainer}>
                    <div className={style.iconArrow}>
                      <HandySvg src={iconArrow} width="10px" height="12px" />
                    </div>
                    <p className={style.description}>
                      Додайте до неї книжки, які маєте намір прочитати.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className={style.item}>
              <h1 className={style.title}>Крок 2</h1>
              <div className={style.contentContainer}>
                <div className={style.icon}>
                  <HandySvg src={iconFlag} width="15px" height="17px" />
                </div>
                <div>
                  <h2 className={style.postTitle}>
                    Сформуйте своє перше тренування
                  </h2>
                  <div className={style.descriptionContainer}>
                    <div className={style.iconArrow}>
                      <HandySvg src={iconArrow} width="10px" height="12px" />
                    </div>
                    <p className={style.description}>
                      Визначте ціль, оберіть період, розпочинайте тренування.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Tablet>
      <Desktop>
        <div className={style.modal}>
          <ul className={style.list}>
            <li className={style.item}>
              <h1 className={style.title}>Крок 1.</h1>
              <div className={style.contentContainer}>
                <div className={style.icon}>
                  <HandySvg src={iconLibrary} width="22px" height="17px" />
                </div>
                <div>
                  <h2 className={style.postTitle}>
                    Створіть особисту бібліотеку
                  </h2>
                  <div className={style.descriptionContainer}>
                    <div className={style.iconArrow}>
                      <HandySvg src={iconArrow} width="10px" height="12px" />
                    </div>
                    <p className={style.description}>
                      Додайте до неї книжки, які маєте намір прочитати.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className={style.item}>
              <h1 className={style.title}>Крок 2</h1>
              <div className={style.contentContainer}>
                <div className={style.icon}>
                  <HandySvg src={iconFlag} width="15px" height="17px" />
                </div>
                <div>
                  <h2 className={style.postTitle}>
                    Сформуйте своє перше тренування
                  </h2>
                  <div className={style.descriptionContainer}>
                    <div className={style.iconArrow}>
                      <HandySvg src={iconArrow} width="10px" height="12px" />
                    </div>
                    <p className={style.description}>
                      Визначте ціль, оберіть період, розпочинайте тренування.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Desktop>
    </>
  );
};
