// src/config.js
export const BACKEND_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3001"
    : "https://neomart-backend-2.onrender.com";
