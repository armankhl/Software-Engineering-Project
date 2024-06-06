import "@/styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const theme = createTheme({
  typography: {
    fontFamily: ["Vazirmatn", "serif"].join(","),
  },
});

export default function App({ Component, pageProps }) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        closeOnClick
        theme="colored"
        rtl
      />
    </QueryClientProvider>
  );
}
