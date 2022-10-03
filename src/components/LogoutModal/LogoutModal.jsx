import { useDispatch } from "react-redux";
import style from "./LogoutModal.module.css";
import operation from "../../redux/operation/auth-operation";

export const LogoutModal = ({ closeLogoutModal }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    closeLogoutModal();

    dispatch(operation.logOut());
  };

  return (
    <div className={style.backdrop}>
      <div className={style.modal}>
        <p className={style.description}>
          Якщо Ви вийдете з програми незбережені дані будуть втрачені
        </p>
        <div className={style.buttonsContainer}>
          <button
            className={style.button}
            type="button"
            onClick={closeLogoutModal}
          >
            Відміна
          </button>
          <button className={style.button} type="button" onClick={handleLogout}>
            Вийти
          </button>
        </div>
      </div>
    </div>
  );
};
