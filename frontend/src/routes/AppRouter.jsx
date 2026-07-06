import React from "react";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import Categories from "../pages/Categories";
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";

// tableau de routes

const routes = [
  { path: "/", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/products", element: <Products /> },
  { path: "/categories", element: <Categories /> },
  { path: "/cart", element: <Cart /> }
];

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
