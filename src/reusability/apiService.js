import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000"; // Update if needed

export const getApiStatus = async () => {
  return axios.get(`${API_BASE_URL}/`);
};

export const startMicRecording = async (chunkDuration, overlapDuration) => {
  return axios.post(`${API_BASE_URL}/record/start`, {
    chunk_duration: chunkDuration,
    overlap_duration: overlapDuration,
  });
};

export const stopMicRecording = async () => {
  return axios.post(`${API_BASE_URL}/record/stop`);
};

export const forceNewChunk = async () => {
  return axios.post(`${API_BASE_URL}/record/force-chunk`);
};

export const startStreamRecording = async (url, chunkDuration, overlapDuration) => {
  return axios.post(`${API_BASE_URL}/stream/start`, {
    url,
    chunk_duration: chunkDuration,
    overlap_duration: overlapDuration,
  });
};

export const stopStreamRecording = async () => {
  return axios.post(`${API_BASE_URL}/stream/stop`);
};

export const forceNewStreamChunk = async () => {
  return axios.post(`${API_BASE_URL}/stream/force-chunk`);
};

export const getRecordingStatus = async () => {
  return axios.get(`${API_BASE_URL}/status`);
};
