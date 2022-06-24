import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import patients from "./pages/patients";
import vitals from "./pages/vitals";
import vitalsrecords from "./pages/vitalsRecords";
import singlePatient from "./pages/singlePatient";
import logout from "./pages/logout";
import login from "./pages/login";
import doctor from "./pages/doctor";
import lab from "./pages/lab"
import allPatients from "./pages/allPatients";
import admin from "./pages/admin"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index element={<login />} />
        <Route path="vitals" element={<vitals />} />
        <Route path="patients" element={<patients />} />
        <Route path="vitalsrecords" element={<vitalsRecords />} />
        <Route path="singlepatients" element={<singlePatients />} />
        <Route path="vitals" element={<vitals />} />
        <Route path="logout" element={<logout />} />
        <Route path="doctor" element={<docter />} />
        <Route path="lab" element={<lab/>} />
        <Route path="allPatients" element={<allPatients />} />
        <Route path="admin" element={<admin />} /> 
      </Routes>
    </BrowserRouter>
  </Provider>
);
