import React from "react";
import "../Styles/Homepage.css";
import Navbar from "../Components/Navbar";
import Tab from '../Components/Tab';
import Button from "@mui/material/Button";



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
            <div className='buttns'>
              <Button
                style={{
                  borderRadius: 22,
                  backgroundColor: "#21b6ae",
                  padding: "0.8rem 1rem",
                  fontSize: "1rem",
                }}
                variant="contained"
              >
                Find your home care plan
              </Button>
              <Button
                style={{
                  borderRadius: 22,
                  backgroundColor: "#21b6ae",
                  padding: "0.8rem 1rem",
                  fontSize: "1rem",
                }}
                variant="contained"
              >
                Health Insurance Options
              </Button>
            </div>
          </div>
          <Tab
            href='/tab'
          />
        </main>
      </section>
    </>
  );
};
export default Homepage;
