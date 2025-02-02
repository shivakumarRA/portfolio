// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allows external access
    port: 3000,      // Default Vite port (can be changed)
  },
  preview: {
    host: "0.0.0.0",
    port: 3000,
    allowedHosts: ['portfolio-2acd.onrender.com'], // Allow this host
  },
});
