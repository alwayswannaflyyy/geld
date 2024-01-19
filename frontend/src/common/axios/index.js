import axios from "axios";

export const api = axios.create({
  baseURL: "https://api2-mrlx.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
