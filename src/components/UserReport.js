import React from "react";

const timeTypes = ["daily", "weekly", "monthly"];

const UserReport = ({ selectedTimeframe, setSelectedTimeframe }) => {
  return (
    <div className="report-wrapper">
      <div className="user-report">
        <div className="user-profile-photo">
          <img src="/images/image-jeremy.png" alt="user-phtoto" />
        </div>

        <div className="user-report-info">
          <div className="about-report">Report for</div>
          <div className="user-name">Jeremy Robson</div>
        </div>
      </div>

      <div className="time-type-wrapper">
        {timeTypes.map((type, idx) => (
          <div
            className={`time-type ${
              selectedTimeframe === type ? "selected-type" : ""
            }`}
            key={idx}
            onClick={() => setSelectedTimeframe(type)}
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReport;
