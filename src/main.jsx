import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from "./components/Auth/AuthProvide.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <div className=" container mx-auto">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
