import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";



const lightTheme = createTheme({
   palette: {
      mode: "light",
   },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <Provider store={store}>
       <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <App />
         </ThemeProvider>
      </Provider>
   </React.StrictMode>
);