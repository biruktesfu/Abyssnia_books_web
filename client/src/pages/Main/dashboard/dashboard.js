import { Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "../../../components/DashBoard/Sidebar/Sidebar";
import Topbar from "../../../components/DashBoard/Topbar/Topbar";

import Home from "../../Dashboard/Home/Home";
import UserList from "../../Dashboard/userList/UserList";
import User from "../../Dashboard/user/User";
import NewUser from "../../Dashboard/newUser/NewUser";
import ProductList from "../../Dashboard/productList/ProductList";
import Product from "../../Dashboard/product/Product";
import NewProduct from "../../Dashboard/newProduct/NewProduct";

function dashboard() {
  return (
    <div className="container">
      <Topbar />
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
          <Outlet/>
      </div>
    </div>
  );
}

export default dashboard;
