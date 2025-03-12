import React from "react";

function Contour() {
  return (
    <div className="relative">
    <div className={`fixed inset-0 border-4 border-purple-acc pointer-events-none z-50`}></div>
    <div className={`fixed inset-0 border-8 border-purple-acc rounded-xl pointer-events-none z-50`}></div>
    </div>
  );
}

export default Contour;
