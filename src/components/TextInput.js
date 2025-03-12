import React from "react";
import { Send, Plus, Mic } from "lucide-react"; // Using Lucide icons

function TextInput() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[50%] flex items-center bg-gray-800 rounded-full p-2 shadow-lg">
      {/* Plus Button */}
      <button className="p-2 rounded-full bg-purple-acc hover:bg-gray-600 text-white">
        <Plus size={20} />
      </button>

      {/* Text Input Field */}
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-1 mx-3 bg-transparent border-none outline-none text-white placeholder-gray-400"
      />

      {/* Microphone Button */}
      <button className="p-2 rounded-full bg-purple-acc hover:bg-gray-600 text-white">
        <Mic size={20} />
      </button>

      {/* Send Button */}
      <button className="p-2 rounded-full bg-purple-acc hover:bg-blue-500 text-white ml-2">
        <Send size={20} />
      </button>
    </div>
  );
}

export default TextInput;
