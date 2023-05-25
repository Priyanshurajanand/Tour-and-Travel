import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Tours from "../../pages/Tours";
import TourDetails from "../../pages/TourDetails";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import SearchResultList from "../../pages/SearchResultList";
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import ThankYou from "../../pages/ThankYou";

const Layout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/tours/search" element={<SearchResultList />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Layout;
