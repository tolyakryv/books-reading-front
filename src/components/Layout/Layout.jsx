import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </>
  );
};
