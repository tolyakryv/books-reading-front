import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import operation from "../redux/operation/auth-operation";
import { userSelector } from "../redux/selector/user-selector";

export const useGetUser = () => {
  const dispatch = useDispatch();
  const token = useSelector(userSelector.getToken);

  useEffect(() => {
    if (token) dispatch(operation.currentUser(token));
  }, [token, dispatch]);
};
