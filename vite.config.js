import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Cambia esto si estás sirviendo tu aplicación en una subruta
});