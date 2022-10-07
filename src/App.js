import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";
import { PublicRoute } from "./components/PublicRoute/PublicRoute.jsx";
import { Layout } from "./components/Layout";
import StatisticsPage from "./pages/Statistics/StatisticsPage.jsx";
import { useSelector } from "react-redux";
import { userSelector } from "./redux/selector/user-selector.js";
import { useGetUser } from "./hooks/useGetUser.js";

const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const InfoMobile = lazy(() => import("./pages/InfoMobile"));
const LibraryPage = lazy(() => import("./pages/Library"));
const TrainingPage = lazy(() => import("./pages/Training"));
// const StatisticsPage = lazy(() => import("./pages/StatisticsPage"));

function App() {
  useGetUser();

  const isFetchingUser = useSelector(userSelector.getIsFetchingUser);

  if (!isFetchingUser) {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PrivateRoute navigateTo="/login">
                  <LibraryPage />
                </PrivateRoute>
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
              path="training"
              element={
                <PrivateRoute navigateTo="/login">
                  <TrainingPage />
                </PrivateRoute>
              }
            />
            <Route
              path="statistics"
              element={
                <PrivateRoute navigateTo="/login">
                  <StatisticsPage />
                </PrivateRoute>
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
}

export default App;
