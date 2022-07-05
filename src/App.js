import { Route, Link, BrowserRouter ,Routes } from "react-router-dom";
import Header from "./Layout Component/Header";
import Sidebar from "./Layout Component/Sidebar";
import Footer from "./Layout Component/Footer";
import Dashboard from "./dashboard";
import NoPage from "./nopage";
import Patient from "./Patient";
import Home from "./Home";
import Login from "./login";
import PatientProcedure from "./PatientProcedure";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "./Layout Component/LoadingSpinner";
import './App.css';
import TableData from './TableData'
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isempty, checkdata] = useState(false);
  const [isLogin, setloggedIn] = useState(true);
  const [userData, setuserData] = useState();
  useEffect(() => {
    const windowCal = () => {
      if (window.innerWidth >= 500) {
        setSidebarOpen(false);
      }
    };
    window.onresize = windowCal;
  }, [window.innerWidth]);

  if (isLogin == true) { return <Login setloggedIn={setloggedIn} /> }
  if (isLogin == false) {
    return (
      <>
        <BrowserRouter>
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />
          <Sidebar sidebarOpen={sidebarOpen} isempty={isempty} />
          <Routes>
            <Route path="/">
            <Route  path="/" element={<Home/>} />
              <Route index element={<Dashboard />} /> 
              <Route  path="tableData" element={<TableData/>} />
              <Route path="PatientProcedure" element={<PatientProcedure />} />
              <Route path="*" element={<NoPage />} />
              <Route path="Patient" element={<Patient />} />

              <Route path="LoadingSpinner" element={<LoadingSpinner />} /> 
              {/* <Route index element={<AllModules />} />
              <Route path="allModules" element={<AllModules />} />
              />
              <Route path="upload" element={<Upload />} /> */}
             
              <Route path="*" element={<NoPage/>} />
            </Route>
          </Routes>

          <Footer />
        </BrowserRouter>



      </>
    )

  }

}

export default App;
