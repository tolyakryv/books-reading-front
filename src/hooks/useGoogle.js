import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import operation from "../redux/operation/auth-operation";

export const useGoogle = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const token = searchParams.get("access_token");

  useEffect(() => {
    if (token) dispatch(operation.currentUser(token));
  }, [token, dispatch]);
};
