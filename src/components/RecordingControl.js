import React, { useState } from "react";
import { 
  startMicRecording, stopMicRecording, forceNewChunk, 
  startStreamRecording, stopStreamRecording, forceNewStreamChunk, 
  getRecordingStatus 
} from "../reusability/apiService";

function RecordingControls() {
  const [recordingStatus, setRecordingStatus] = useState(null);
  const [streamUrl, setStreamUrl] = useState("");

  const handleMicStart = async () => {
    try {
      const response = await startMicRecording(5, 1); // Adjust duration
      console.log(response.data);
    } catch (error) {
      console.error("Error starting mic recording:", error.response?.data || error.message);
    }
  };

  const handleMicStop = async () => {
    try {
      const response = await stopMicRecording();
      console.log(response.data);
    } catch (error) {
      console.error("Error stopping mic recording:", error.response?.data || error.message);
    }
  };

  const handleNewMicChunk = async () => {
    try {
      const response = await forceNewChunk();
      console.log(response.data);
    } catch (error) {
      console.error("Error forcing new chunk:", error.response?.data || error.message);
    }
  };

  const handleStreamStart = async () => {
    try {
      const response = await startStreamRecording(streamUrl, 5, 1);
      console.log(response.data);
    } catch (error) {
      console.error("Error starting stream recording:", error.response?.data || error.message);
    }
  };

  const handleStreamStop = async () => {
    try {
      const response = await stopStreamRecording();
      console.log(response.data);
    } catch (error) {
      console.error("Error stopping stream recording:", error.response?.data || error.message);
    }
  };

  const handleNewStreamChunk = async () => {
    try {
      const response = await forceNewStreamChunk();
      console.log(response.data);
    } catch (error) {
      console.error("Error forcing new stream chunk:", error.response?.data || error.message);
    }
  };

  const fetchRecordingStatus = async () => {
    try {
      const response = await getRecordingStatus();
      setRecordingStatus(response.data);
    } catch (error) {
      console.error("Error fetching recording status:", error.response?.data || error.message);
    }
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-2">Recording Controls</h2>

      {/* Microphone Controls */}
      <div className="mb-4">
        <h3 className="text-lg">Microphone Recording</h3>
        <button className="p-2 bg-green-500 rounded m-2" onClick={handleMicStart}>Start Mic</button>
        <button className="p-2 bg-red-500 rounded m-2" onClick={handleMicStop}>Stop Mic</button>
        <button className="p-2 bg-blue-500 rounded m-2" onClick={handleNewMicChunk}>Force Mic Chunk</button>
      </div>

      {/* Stream Controls */}
      <div className="mb-4">
        <h3 className="text-lg">Stream Recording</h3>
        <input 
          className="p-2 text-black rounded" 
          type="text" 
          value={streamUrl} 
          placeholder="Enter stream URL" 
          onChange={(e) => setStreamUrl(e.target.value)} 
        />
        <button className="p-2 bg-green-500 rounded m-2" onClick={handleStreamStart}>Start Stream</button>
        <button className="p-2 bg-red-500 rounded m-2" onClick={handleStreamStop}>Stop Stream</button>
        <button className="p-2 bg-blue-500 rounded m-2" onClick={handleNewStreamChunk}>Force Stream Chunk</button>
      </div>

      {/* Recording Status */}
      <div>
        <button className="p-2 bg-gray-600 rounded m-2" onClick={fetchRecordingStatus}>Get Status</button>
        {recordingStatus && (
          <pre className="text-white mt-2">{JSON.stringify(recordingStatus, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

export default RecordingControls;
