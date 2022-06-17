import { Routes, Route, Outlet, Link  } from "react-router-dom";
import "../../../components/DashBoard/Sidebar/sidebar.css"
import Sidebar from "../../../components/DashBoard/Sidebar/Sidebar";
import Topbar from "../../../components/DashBoard/Topbar/Topbar";

import Home from "../../Dashboard/DBHome/DBHome";
import UserList from "../../Dashboard/userList/UserList";
import User from "../../Dashboard/user/User";
import NewUser from "../../Dashboard/newUser/NewUser";
import ProductList from "../../Dashboard/productList/ProductList";
import Product from "../../Dashboard/product/Product";
import NewProduct from "../../Dashboard/newProduct/NewProduct";

import "../../../dummyData"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../../dummyData";
import { useState } from "react";

function dashboard() {
  return (
    <div className="container">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="">Home</Link> |{" "}
        <Link to="user">Users List</Link> |{" "}
        <Link to="user/:userId">User</Link> |{" "}
        <Link to="newUser">New User</Link> |{" "}
        <Link to="product">Product List</Link> |{" "}
        <Link to="product/:productId">Product</Link> |{" "}
        <Link to="newproduct">New Product</Link> |{" "}
      </nav>
      <div>
      <Outlet />
      
      </div>
      
      {/* <Topbar />
      <div>
        <Sidebar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
        <Outlet />
      </div> */}
    </div>
  );
}

export default dashboard;
