
import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function Header() {
  return (
    <ul className="menu">
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/orderlist">Order List</NavLink></li>
      <li><NavLink to="/orderdetail">Order Detail</NavLink></li>
      <li><NavLink to="/customer">Customer</NavLink></li>
      <li><NavLink to="/analytics">Analytics</NavLink></li>
      <li><NavLink to="/review">Reviews</NavLink></li>
      <li><NavLink to="/food">Foods</NavLink></li>
      <li><NavLink to="/fooddetail">Food Detail</NavLink></li>
      <li><NavLink to="/customerdetail">Customer Detail</NavLink></li>
      <li><NavLink to="/calendar">Calendar</NavLink></li>
      <li><NavLink to="/chat">Chat</NavLink></li>
      <li><NavLink to="/wallet">Wallet</NavLink></li>
    </ul>
  );
}

export default Header;
