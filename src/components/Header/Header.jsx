import { NavLink } from "react-router-dom";
import { HandySvg } from "handy-svg";
import styled from "styled-components";
import iconLibrary from "../../img/new-icons-library.svg";
import iconTraining from "../../img/black-icon-library.svg";
import style from "./Header.module.css";
import { LogoutModal } from "../LogoutModal/LogoutModal";
import { Mobile, Tablet, Desktop } from "../../helpers/responsiveComponents";
import { useState } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/selector/user-selector";
import { Avatar } from "@mui/material";

const StyledLink = styled(NavLink)`
  fill: #a6abb9;

  &.active {
    fill: #ff6b08;
  }
`;

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
    <div className={style.container}>
      <Mobile>
        <div className={style.header}>
          {isLogin ? (
            <>
              <p className={style.logoBeforeLogin}>BR</p>
              <StyledLink className={style.iconLibrary} to="/" end>
                <HandySvg src={iconLibrary} width="22px" height="20px" />
              </StyledLink>
              <StyledLink className={style.iconHome} to="/statistics">
                <HandySvg src={iconTraining} width="22px" height="17px" />
              </StyledLink>
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
              <StyledLink className={style.iconLibrary} to="/" end>
                <HandySvg src={iconLibrary} width="22px" height="20px" />
              </StyledLink>
              <StyledLink className={style.iconHome} to="/statistics">
                <HandySvg src={iconTraining} width="22px" height="17px" />
              </StyledLink>
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
              <StyledLink className={style.iconLibrary} to="/" end>
                <HandySvg src={iconLibrary} width="22px" height="20px" />
              </StyledLink>
              <StyledLink className={style.iconHome} to="/statistics">
                <HandySvg src={iconTraining} width="22px" height="17px" />
              </StyledLink>
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
    </div>
  );
};

export default Header;
