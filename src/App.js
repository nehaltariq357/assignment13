
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard"
import Customer from "./Components/Customer";
import Orderlist from "./Components/Orderlist";
import Orderdetail from "./Components/Orderdetail";
import Analytics from "./Components/Analytics";
import Review from "./Components/Review";
import Food from "./Components/Food";
import Fooddetail from "./Components/Fooddetail";
import Customerdetail from "./Components/Customerdetail";
import Calendar from "./Components/Calendar";
import Chat from "./Components/Chat";
import Wallet from "./Components/Wallet";
import Header from "./Header"; 
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container"> 
        <Header />
        <div className="content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orderlist" element={<Orderlist />} />
            <Route path="/orderdetail" element={<Orderdetail />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/review" element={<Review />} />
            <Route path="/food" element={<Food />} />
            <Route path="/fooddetail" element={<Fooddetail />} />
            <Route path="/customerdetail" element={<Customerdetail />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
