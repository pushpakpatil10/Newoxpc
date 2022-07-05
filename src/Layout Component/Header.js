import React from 'react'
import "../App.css";

import { Link } from "react-router-dom";
export default function Header({
  setSidebarOpen,
  sidebarOpen,
}) {
  return (
    <div>
      <header id="header" className="header fixed-top d-flex align-items-center">

<div className="d-flex align-items-center justify-content-between">
<i className="bi bi-list toggle-sidebar-btn"  onClick={() => setSidebarOpen(!sidebarOpen)}></i>
  <a href="/allModules" className="logo d-flex align-items-center">
    {/* <img src="assets/img/logo.png" alt=""/> */}
    <img src="assets/img/OXDH.png" alt="" width={150}/>
    {/* <span className="d-none d-lg-block">NiceAdmin</span> */}
  </a>

</div>

<div className="search-bar">
  {/* <form className="search-form d-flex align-items-center" method="POST" action="#">
    <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
    <button type="submit" title="Search"><i className="bi bi-search"></i></button>
  </form> */}
</div>

<nav className="header-nav ms-auto">
  <ul className="d-flex align-items-center">

    <li className="nav-item dropdown pe-3">
      <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
        <img src="assets/img/sally.jpg" alt="Profile" className="rounded-circle" />
        <span className="d-none d-md-block dropdown-toggle ps-2">Sakshi</span>
      </a>

      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>Sakshi Thakur</h6>
          <span>Web Developer</span>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center">
            <i className="bi bi-person"></i>
            <Link to="/Profile" >
            <span>My Profile</span>
              </Link>
          
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>
        <li>
          <a className="dropdown-item d-flex align-items-center">
          <i class="bi bi-upload"></i>
            <Link to="/upload" >
            <span>Upload Docs</span>
              </Link>
          
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider"/>
        </li>
        
        <li>
          <hr className="dropdown-divider"/>
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="#">
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>

      </ul>
    </li>

  </ul>
</nav>

</header>
    </div>
  )
}
