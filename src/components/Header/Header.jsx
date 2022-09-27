import { Link, Outlet } from "react-router-dom";
import { HandySvg } from "handy-svg";
import iconHome from "../../icon/icon_home.svg";
import iconLibrary from "../../icon/icon_library.svg";
import style from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/operations";

export const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.booksReading.userName);
  const isLogin = useSelector((state) => state.booksReading.isLogin);

  const handleLogout = () => {
    dispatch(logout());
  };

  const getFirstLetterOfName = (userName) => {
    return `${userName.split(" ")[0][0]}`;
  };

  return (
    <>
      <div className={style.header}>
        {true ? (
          <>
            <p className={style.logoBeforeLogin}>BR</p>
            <Link to="/library" className={style.iconLibrary}>
              <HandySvg src={iconLibrary} width="22" height="17" />
            </Link>
            <Link to="/training" className={style.iconHome}>
              <HandySvg src={iconHome} width="20" height="17" />
            </Link>
            <p className={style.avatar}>{getFirstLetterOfName("Андрій")}</p>
            <button
              className={style.logout}
              type="button"
              onClick={handleLogout}
            >
              Вихід
            </button>
          </>
        ) : (
          <p className={style.logoAfterLogin}>BR</p>
        )}
      </div>
      <Outlet />
    </>
  );
};