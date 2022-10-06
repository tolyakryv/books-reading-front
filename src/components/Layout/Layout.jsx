import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { BookLoader } from "../BookLoader/BookLoader";
import Header from "../Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<BookLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
