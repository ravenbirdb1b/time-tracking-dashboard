import { useState } from "react";
import "./App.css";
import ReportCard from "./components/ReportCard";

import userData from "./data/data.json";
import UserReport from "./components/UserReport";

function App() {
  console.log(userData);
  const [selectedTimeframe, setSelectedTimeframe] = useState("daily");

  return (
    <div className="App">
      <div className="user-report-wrapper">
        <UserReport
          selectedTimeframe={selectedTimeframe}
          setSelectedTimeframe={setSelectedTimeframe}
        />
        {userData.map((data, idx) => (
          <ReportCard
            reportData={data}
            selectedTimeframe={selectedTimeframe}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
