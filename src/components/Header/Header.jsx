import { Link, Outlet } from "react-router-dom";
import { HandySvg } from "handy-svg";
import iconHome from "../../img/icon home.svg";
import iconLibrary from "../../img/icon library.svg";
import style from "./Header.module.css";
// import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export const Header = () => {
  //   const dispatch = useDispatch();
  //   Те що повинно бути у стейті редакса
  //   const userName = useSelector((state) => state.booksReading.userName);
  //   const isLogin = useSelector((state) => state.booksReading.isLogin);

  // Для прикладу роботи логіки
  const isLogin = true;
  const userName = "Володимир Зеленський";

  const handleLogout = () => {
    // потрібно добавити апі та налаштувати редакс
    // dispatch();
  };

  const getFirstLetterOfName = (userName) => {
    return `${userName.split(" ")[0][0]}`;
  };

  return (
    <>
      <Mobile>
        <div className={style.header}>
          {isLogin ? (
            <>
              <p className={style.logoBeforeLogin}>BR</p>
              <Link to="/library" className={style.iconLibrary}>
                <HandySvg src={iconLibrary} width="22" height="17" />
              </Link>
              <Link to="/training" className={style.iconHome}>
                <HandySvg src={iconHome} width="20" height="17" />
              </Link>
              <p className={style.avatar}>{getFirstLetterOfName(userName)}</p>
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
          <Outlet />
        </div>
      </Mobile>
      <Tablet>
        <div className={style.header}>
          {isLogin ? (
            <>
              <p className={style.logoBeforeLogin}>BR</p>
              <p className={style.avatar}>{getFirstLetterOfName(userName)}</p>
              <p className={style.userName}>{userName}</p>
              <Link to="/library" className={style.iconLibrary}>
                <HandySvg src={iconLibrary} width="22" height="17" />
              </Link>
              <Link to="/training" className={style.iconHome}>
                <HandySvg src={iconHome} width="20" height="17" />
              </Link>
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
          <Outlet />
        </div>
      </Tablet>
      <Desktop>
        <div className={style.header}>
          {isLogin ? (
            <>
              <p className={style.logoBeforeLogin}>BR</p>
              <p className={style.avatar}>{getFirstLetterOfName(userName)}</p>
              <p className={style.userName}>{userName}</p>
              <Link to="/library" className={style.iconLibrary}>
                <HandySvg src={iconLibrary} width="22" height="17" />
              </Link>
              <Link to="/training" className={style.iconHome}>
                <HandySvg src={iconHome} width="20" height="17" />
              </Link>
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
          <Outlet />
        </div>
      </Desktop>
    </>
  );
};
