import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AllProviders } from "./AllProviders";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "./utils";
import { ToastPortal } from "./components";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AllProviders>
        <ScrollToTop>
          <ToastPortal />
          <App />
        </ScrollToTop>
      </AllProviders>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
