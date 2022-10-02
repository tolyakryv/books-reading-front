import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header/Header.jsx";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";
import { PublicRoute } from "./components/PublicRoute/PublicRoute.jsx";
import { LibraryPage } from "./pages/Library/LibraryPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import ShowTimer from "./components/Timer/ShowTimer/ShowTimer";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <PrivateRoute navigateTo="/login">
                <LibraryPage />
                <ShowTimer />
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
                <Register />
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
      <ToastContainer />
    </>
  );
}

export default App;
