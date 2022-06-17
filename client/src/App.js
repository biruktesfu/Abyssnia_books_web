import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

// main

import Home from "./pages/Main/index/index";
import Library from "./pages/Main/library/library";
import Publish from "./pages/Main/publish/publish";
import Dashboard from "./pages/Main/dashboard/dashboard";
import Profile from "./pages/Main/profile/profile";
import About from "./pages/Main/about/about";
import Events from "./pages/Main/events/events";
import SignUp from "./pages/Main/signup/signup";
import SignIn from "./pages/Main/signin/signin";

// dashboard
import DBHome from "./pages/Dashboard/DBHome/DBHome";
import UserList from "./pages/Dashboard/userList/UserList";
import User from "./pages/Dashboard/user/User";
import NewUser from "./pages/Dashboard/newUser/NewUser";
import ProductList from "./pages/Dashboard/productList/ProductList";
import Product from "./pages/Dashboard/product/Product";
import NewProduct from "./pages/Dashboard/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/publish" element={<Publish />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="DBHome" element={<DBHome />} />
          <Route path="user" element={<UserList />} />
          <Route path="newUser" element={<NewUser />} />
          <Route path="user/:userId" element={<User />} />
          <Route path="product" element={<ProductList />} />
          <Route path="newproduct" element={<NewProduct />} />
          <Route path="product/:productId" element={<Product />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
