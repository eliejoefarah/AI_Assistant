import React from "react";
import Sidebar from "../components/Sidebar"; // Import Sidebar
import TextInput from "../components/TextInput"; // Import ChatInput

function MainPage() {
  return (
    <div className={`relative bg-grey-bg text-white min-h-screen flex flex-col`}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-text-color ">Welcome to the Main Page</h1>
      </div>

      {/* Chat Input - Positioned Above Contour */}
      <div className="relative z-20">
        <TextInput />
      </div>
    </div>
  );
}

export default MainPage;
