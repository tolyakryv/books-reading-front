import { Link, Outlet } from "react-router-dom";
import { HandySvg } from "handy-svg";
import iconHome from "../../img/icon home.svg";
import iconLibrary from "../../img/icon library.svg";
import style from "./Header.module.css";
import { LogoutModal } from "../LogoutModal/LogoutModal";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import { useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selector/user-selector";

export const Header = () => {
  const userName = useSelector(userSelector.getUserName);
  const isLogin = useSelector(userSelector.getIsLogin);
  const [IsLogoutModal, setIsLogoutModal] = useState(false);

  const closeLogoutModal = () => {
    setIsLogoutModal(false);
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
              <Link to="/" className={style.iconLibrary}>
                <HandySvg src={iconLibrary} width="22" height="17" />
              </Link>
              <Link to="/training" className={style.iconHome}>
                <HandySvg src={iconHome} width="20" height="17" />
              </Link>
              <p className={style.avatar}>{getFirstLetterOfName(userName)}</p>
              <button
                className={style.logout}
                type="button"
                onClick={() => setIsLogoutModal(true)}
              >
                Вихід
              </button>
            </>
          ) : (
            <p className={style.logoAfterLogin}>BR</p>
          )}
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
                onClick={() => setIsLogoutModal(true)}
              >
                Вихід
              </button>
            </>
          ) : (
            <p className={style.logoAfterLogin}>BR</p>
          )}
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
                onClick={() => setIsLogoutModal(true)}
              >
                Вихід
              </button>
            </>
          ) : (
            <p className={style.logoAfterLogin}>BR</p>
          )}
        </div>
      </Desktop>
      {IsLogoutModal && <LogoutModal closeLogoutModal={closeLogoutModal} />}
      <Outlet />
    </>
  );
};
