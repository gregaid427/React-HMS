import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Patients from "./pages/Patients";
import Vitals from "./pages/Vitals";
import VitalsRecords from "./pages/VitalsRecords";
import SinglePatient from "./pages/SinglePatient";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Doctor from "./pages/Doctor";
import Lab from "./pages/Lab";
import AllPatients from "./pages/AllPatients";
import Admin from "./pages/Admin";
import Error from "./pages/error";
import Header from "./features/Header";
import Footer from   "./features/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
    <Header />
      <Routes>
        <Route path="/app" element={<App />} />
        <Route path="/" element={<Login />} />
        <Route path="/vitals" element={<Vitals />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/vitalsrecords" element={<VitalsRecords />} />
        <Route path="/singlepatients" element={<SinglePatient />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/allPatients" element={<AllPatients />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </Provider>
);
