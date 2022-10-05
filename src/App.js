import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header } from "./components/Header/Header.jsx";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";
import { PublicRoute } from "./components/PublicRoute/PublicRoute.jsx";
import { LibraryPage } from "./pages/Library/LibraryPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import StatisticsPage from "./pages/Statistics/StatisticsPage.jsx";
import { TrainingPage } from "./pages/Training/TrainingPage";
import { InfoMobile } from "./pages/InfoMobile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={<PrivateRoute navigateTo="/login"></PrivateRoute>}
          />
          <Route
            path="library"
            element={
              <PublicRoute navigateTo="/">
                <LibraryPage />
              </PublicRoute>
            }
          />
          <Route
            path="info"
            element={
              <PublicRoute navigateTo="/">
                <InfoMobile />
              </PublicRoute>
            }
          />
          <Route
            path="library"
            element={
              <PublicRoute navigateTo="/">
                <LibraryPage />
              </PublicRoute>
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
            path="library"
            element={
              <PublicRoute navigateTo="/library">
                <LibraryPage />
              </PublicRoute>
            }
          />
          <Route
            path="training"
            element={
              <PublicRoute navigateTo="/">
                <TrainingPage />
              </PublicRoute>
            }
          />
          <Route
            path="statistic"
            element={
              <PublicRoute navigateTo="/">
                <StatisticsPage />
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
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
