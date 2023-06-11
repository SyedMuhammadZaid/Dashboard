import React from "react";
import "./style.css";
import Card from "../Card";
import HolidayCard from "../HolidayCard";

const Home = () => {
  return (
    <div className="home-main">
      <h4>You Currently have 3 requests</h4>
      <div className="upper-card">
        <Card />
        <div className="selector">
          <button>Received</button>
          <button>Negotiating</button>
          <button>Completed</button>
        </div>
      </div>

      <div className="down-card">
        <Card />
        <button className="large-button">Completed</button>
        <div className="holiday-cards">
            <HolidayCard />
            <HolidayCard />
            <HolidayCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
