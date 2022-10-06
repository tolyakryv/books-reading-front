import { Link } from "react-router-dom";
import { HandySvg } from "handy-svg";
import iconLibrary from "../../img/new-icons-library.svg";
import iconTraining from "../../img/icon library.svg";
import style from "./Header.module.css";
import { LogoutModal } from "../LogoutModal/LogoutModal";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import { useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selector/user-selector";
import { Avatar } from "@mui/material";

const Header = () => {
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
                <HandySvg
                  src={iconLibrary}
                  width="22px"
                  height="20px"
                  fill="#A6ABB9"
                />
              </Link>
              <Link to="/training" className={style.iconHome}>
                <HandySvg src={iconTraining} width="22px" height="17px" />
              </Link>
              <Avatar
                className={style.avatar}
                sx={{
                  width: 33,
                  height: 33,
                  bgcolor: "#F5F7FA",
                  color: "black",
                }}
              >
                {getFirstLetterOfName(userName)}
              </Avatar>
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
              <Avatar
                className={style.avatar}
                sx={{
                  width: 33,
                  height: 33,
                  bgcolor: "#F5F7FA",
                  color: "black",
                }}
              >
                {getFirstLetterOfName(userName)}
              </Avatar>
              <p className={style.userName}>{userName}</p>
              <Link to="/" className={style.iconLibrary}>
                <HandySvg
                  src={iconLibrary}
                  width="22"
                  height="20px"
                  fill="#A6ABB9"
                />
              </Link>
              <Link to="/training" className={style.iconHome}>
                <HandySvg src={iconTraining} width="22" height="17" />
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
              <Avatar
                className={style.avatar}
                sx={{
                  width: 33,
                  height: 33,
                  bgcolor: "#F5F7FA",
                  color: "black",
                }}
              >
                {getFirstLetterOfName(userName)}
              </Avatar>
              <p className={style.userName}>{userName}</p>
              <Link to="/" className={style.iconLibrary}>
                <HandySvg
                  src={iconLibrary}
                  width="22"
                  height="20px"
                  fill="#A6ABB9"
                />
              </Link>
              <Link to="/training" className={style.iconHome}>
                <HandySvg src={iconTraining} width="22" height="17" />
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
    </>
  );
};

export default Header;
