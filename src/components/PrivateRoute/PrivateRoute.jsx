import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Navigate } from "react-router-dom";
import { userSelector } from "../../redux/selector/user-selector";

export const PrivateRoute = ({ children, navigateTo }) => {
  const isLogin = useSelector(userSelector.getIsLogin);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  if (isLogin) return children;
  if (isMobile) return <Navigate to="/info" />;
  return <Navigate to={navigateTo} />;
};
