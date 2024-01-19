import axios from "axios";

export const api = axios.create({
  baseURL: "https://api5-xp7u.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
