import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";
import { PublicRoute } from "./components/PublicRoute/PublicRoute.jsx";
import { LibraryPage } from "./pages/Library/LibraryPage";
import { Login } from "./pages/Login";
import Training from "./components/Training/Training";
import ShowTimer from "./components/Timer/ShowTimer/ShowTimer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route
          index
          element={
            <PrivateRoute navigateTo="/login">
              <LibraryPage />
              {/* <Training />
              <ShowTimer /> */}
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute navigateTo="/">
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute navigateTo="/">
              <></>
            </PublicRoute>
          }
        />
        <Route
          path="*"
          element={
            <>
              <h1>Page not found</h1>
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
