import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import operation from "../redux/operation/auth-operation";
import { userSelector } from "../redux/selector/user-selector";

export const useGetUser = () => {
  const isFirstRender = useRef(true);
  const dispatch = useDispatch();
  const token = useSelector(userSelector.getToken);

  useEffect(() => {
    if (isFirstRender.current && token) {
      dispatch(operation.currentUser(token));
    }
    isFirstRender.current = false;
  }, [token, dispatch]);
};
