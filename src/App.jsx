import React, { Suspense } from "react";

// webpacks
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// components
import Loader from "./components/hoc/loader";
import Layout from "./layout";
import PrivateRoute from "./privateRoute";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss'


// lazy loading
const Login = React.lazy(() => import("./pages/login"));
const Products = React.lazy(() => import("./pages/productsList"));
const Profile = React.lazy(() => import("./pages/profilePage"))

const App = () => {

  return (
    <Router>
      <Routes>
        {[
          "/",
          "/login"
        ].map((path) => (
          <Route
            path={path}
            key={path}
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          ></Route>
        ))}
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            </Suspense>
          }
        >
          <Route
            path={'/products'}
            element={
              <Suspense fallback={<Loader />}>
                <Products />
              </Suspense>
            }
          ></Route>
           <Route
            path={'/profile'}
            element={
              <Suspense fallback={<Loader />}>
                <Profile />
              </Suspense>
            }
          ></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
