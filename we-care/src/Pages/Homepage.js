import React from "react";
import "../Styles/Homepage.css";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <section className="homebody">
        <header>
          <div className="sub_nav">
            <h3> Call us at 1-800-932-2730 </h3>
          </div>
        </header>
        <main className="background">
          <div className="text">
            <h2> Have a peace of mind when you know We Care. </h2>
            <h3> Find your home care plan </h3>
          </div>
        </main>
      </section>
    </>
  );
};
export default Homepage;
