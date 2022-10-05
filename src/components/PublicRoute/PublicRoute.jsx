import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { userSelector } from "../../redux/selector/user-selector";

export const PublicRoute = ({ children, navigateTo }) => {
  const isLogin = useSelector(userSelector.getIsLogin);
  return isLogin ? children : <Navigate to={navigateTo} />;
};
