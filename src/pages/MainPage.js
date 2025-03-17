import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import TextInput from "../components/TextInput";
import RecordingControls from "../components/RecordingControl";
import { getApiStatus } from "../reusability/apiService";

function MainPage() {
  const [apiStatus, setApiStatus] = useState({
    status: "offline",
    api_name: "Unknown API",
    version: "Unknown",
  });

  useEffect(() => {
    const fetchApiStatus = async () => {
      try {
        const response = await getApiStatus();
        console.log("API Response Data:", response.data);
        setApiStatus(response.data);
      } catch (error) {
        console.error("Error fetching API status:", error);
        setApiStatus({ status: "offline", api_name: "Hardware API", version: "Unknown" });
      }
    };

    fetchApiStatus();
  }, []);

  return (
    <div className="relative bg-grey-bg text-white min-h-screen flex flex-col">
      <Sidebar />

      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-text-color">Welcome to the Main Page</h1>

        <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">API Status:</h2>
          <p className="text-lg">
            <span className={`font-bold ${apiStatus.status === "online" ? "text-green-400" : "text-red-400"}`}>
              {apiStatus.status?.toUpperCase()}
            </span>{" "}
            - {apiStatus.api_name} (v{apiStatus.version})
          </p>
        </div>

        {/* Recording Controls Component */}
        <RecordingControls />
      </div>

      <div className="relative z-20">
        <TextInput />
      </div>
    </div>
  );
}

export default MainPage;
