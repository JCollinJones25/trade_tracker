import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.scss";
import App from "./App";
import Header from './components/Header'
import Main from './components/Main'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Stock from './pages/Stock'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
  <Router>
    <Header />
    <Nav />
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Main />} />
        <Route path="/stock" element={<Stock />} />
      </Route>
    </Routes>
    <Footer />
  </Router>
</React.StrictMode>
);
