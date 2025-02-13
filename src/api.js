import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Update this if deployed

export const fetchJobs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/jobs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/news`);
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
