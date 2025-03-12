import { useState } from "react";
import { Menu } from "lucide-react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const sidebarBg = "bg-purple-950"; // Darkish Purple Shade
  const sidebarAccent = "bg-purple-acc"; // Your Accent Color

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen ${sidebarAccent} text-white transition-all duration-300 shadow-2xl ${
          isOpen ? "w-64 p-4" : "w-16 p-2"
        } flex flex-col items-start`}
      >
        {/* Toggle Button (Inside Sidebar) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-purple-acc hover:bg-purple-800 transition"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Sidebar Items */}
        <ul className={`mt-6 space-y-2 transition-all ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}>
          {["Item 1", "Item 2", "Item 3", "Item 4"].map((item, index) => (
            <li
              key={index}
              className={`p-3 rounded-lg transition-all hover:bg-purple-800 cursor-pointer text-sm`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
