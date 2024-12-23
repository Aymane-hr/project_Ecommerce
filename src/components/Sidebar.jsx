import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <NavLink to="/admin" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/products" activeClassName="active">
            Manage Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/orders" activeClassName="active">
            Manage Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/users" activeClassName="active">
            Manage Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
