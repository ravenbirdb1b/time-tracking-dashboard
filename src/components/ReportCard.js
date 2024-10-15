import React from "react";
import { GoKebabHorizontal } from "react-icons/go";

const ReportCard = ({ reportData, selectedTimeframe }) => {
  const { title, timeframes, bgUrl, bgColor } = reportData;

  const timeFrame = { weekly: "week", daily: "day", monthly: "month" };
  return (
    <div
      className="report-card-wrapper"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="bg-img">
        <img src={bgUrl} alt="background-image" />
      </div>
      <div className="report-card">
        <div className="report-card-header">
          <div className="header-title">{title}</div>
          <GoKebabHorizontal />
        </div>

        <div className="report-card-content">
          <div className="report-hours">
            {timeframes[selectedTimeframe]?.current || 0}Hrs
          </div>
          <div className="report-last-week">
            last {timeFrame[selectedTimeframe]} -{" "}
            {timeframes[selectedTimeframe]?.previous || 0}Hrs
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
