import React from "react";
import Button from "./Button";

const HolidayCard = () => {
  return (
    <div className="holiday-card">
      <h1 style={{ color: "#44A16F" }}>H</h1>
      <h4>Holiday Inn </h4>
      <div className="holiday-inner-card">
        <span>1.5 miles away from JobLocation</span>
        <div className="holiday-inner-deal">
          <div className="holiday-inner-detail">
            <span>Singles $150</span>
            <span>Doubles $200</span>
          </div>
          <Button value={"Book now"} />
        </div>
      </div>
    </div>
  );
};

export default HolidayCard;
