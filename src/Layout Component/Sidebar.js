import React, { useEffect, useState } from "react";
import { Link ,useNavigate ,useLocation } from "react-router-dom";
import "../App.css";
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import {items} from "../PatientProcedure"

import axios from 'axios';


export default function Sidebar({ sidebarOpen, isempty, isLogin }) {
 
 //var a=items;
  const navigate = useNavigate();
  const { state } = useLocation();
  var data = state;
  const url = process.env.REACT_APP_API_URL;
  const [moduleData, setModuleData] = useState([]);
  const [moduleID, setModuleID] = useState([]);

  var CId = "ce7f3c8a-93d6-ec11-a7b5-6045bd100b97";
  var RId = "5289fb00-dcea-ec11-bb3c-00224840be97";
  var DataModule = sessionStorage.getItem("data");
  //console.log(favoritemovie);
  const [show, setShow] = useState(false);
   
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllModules();

  }, []);
  debugger;
  const getAllModules = async () => {
    debugger
    try {
      const res = await axios.get(`${url}api/Questioner/GetPatientReferal?PatientId=${CId}&ReferalId=${RId}`);
      console.log(res, 'getAllModules');
      for (var i = 0; i < res.data.module.length; i++) {
        res.data.module.sort((a, b) => (a.order > b.order) ? 1 : -1)
          
        } 
   
      setModuleData(res.data.module);
      setModuleID(res.data.id);
    }
    catch {
      console.log(console.error)
    }
  }
  debugger
  return (
    <div >
      {/* { isLogin ? */}
      <aside id="sidebar" className={sidebarOpen ? "sidebar-container-active" : "sidebar"}>

        <ul className="sidebar-nav" id="sidebar-nav" >
          <div className="card nav-card">
            <div className="card-body">
              <h6 className='text-muted mt-2'>Your consent forms are due on </h6>
              <h5 className=""><i className="bi bi-calendar"></i> WED JAN 26 2022 </h5>
              <hr />
              <h6 className="card-subtitle mb-2 text-muted">Your consent dead-line (Sat Jan 22 2022) is in (some text is here)</h6>
              <h4 className="card-text"><i className="bi bi-stopwatch"></i> 10 days</h4>
            </div>
          </div>

          <div className="card nav-card">
          {data ?       
            <div className="card-body">
            <div className="row ">
           <div className="col float-right">
           <a variant="primary" href="javascript:void(0)"  onClick={handleShow}>
      <small>Edit</small>  
      </a>
           </div>
        
             
            </div>
              <div className="row">
                <div className="col">
              <b>Name</b>    : {data.item.fullName}  
                </div>
              </div>
              <div className="row">
                <div className="col">
               <b>NHSnumber</b>   : {data.item.nhsNumber}
                </div>
              </div>
              <div className="row">
                <div className="col">
                 <b>Mobile No</b> : {data.item.mobilePhone}
                </div>
              </div>
              <div className="row">
                <div className="col">
                <b>Email</b>  : {data.item.emailAddress}
                </div>
              </div>
        
              <div className="row">
                <div className="col">
                 <b>DOB</b> : {data.item.birthDate}
                </div>
              </div>
              <div className="row">
                <div className="col">
               <b>Age</b>   : {data.item.age}
                </div>
              </div>
              
              
            </div>
            : null}
          </div>

          <li className="nav-item">

            <a className="nav-link collapsed" onClick={() => navigate('/')} data-bs-target="#icons-nav1" data-bs-toggle="collapse" href="#">
              <i className="bi bi-boxes"></i>
              <Link  to="">
                <span>Dashboard</span>
              </Link>
            </a>

            <ul id="icons-nav1" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              {moduleData ?
                moduleData.map((data, k) => (
                  <>
                    <li className="nav-item" onClick={() => History.push('/questions', { state: { data, moduleID } })}>


                      <Link to="">

                        {data.submit == true ? <small className="text-success"><i class="bi bi-circle-fill"></i></small> : data.save == true ? <small className="text-info ">  <i class="bi bi-circle-fill"></i></small> : <small className="text-warning ">  <i class="bi bi-circle-fill"></i></small>
                        }
                        <span>{data.name.slice(0, 20)}</span>

                      </Link>
                    </li>
                  </>
                ))
                : null
              }
            </ul>
          </li>
          {/* <li className="nav-item" onClick={() => navigate('/tableData')}>
            <a className="nav-link collapsed" data-bs-target="#icons-nav3" data-bs-toggle="collapse" href="#">
              <i className="bi bi-boxes" ></i> <Link to="/Table" >
              <span>Previous procedure</span>
              </Link>
             
            </a>

            <ul id="icons-nav3" className="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
               
              </li>

            </ul>
          </li>
          */}
        </ul>
      </aside>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {data ? 
    <form action="" method="post">
    <div className="row g-2 pt-2">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input name="firstName" type="text" className="form-control " value={data.item.firstName} id="" />
                                        <label for="">First Name</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text" name="lastName" className="form-control" value={data.item.lastName} id="" />
                                        <label for="">Last Name</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-2 pt-2">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="email" name="email" className="form-control" id="" value={data.item.emailAddress} />
                                        <label for="">Email Address</label>
                                        {/* <div className="invalid-feedback">
                                            Please enter email.
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="email" name="nhsNumber" className="form-control" id="" value={data.item.nhsNumber} />
                                        <label for="">NHS Number</label>
                                        {/* <div className="invalid-feedback">
                                            Please enter email.
                                        </div> */}
                                    </div>
                                </div>

                            </div>
                            <div className="row g-2 pt-2">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text" name="phoneNumber" className="form-control" id="" value={data.item.mobilePhone}/>
                                        <label for="">Phone Number</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="date" name="DOB" className="form-control" id="" value={data.item.birthDate} />
                                        <label for="">Date of Birth</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row g-2 pt-2">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <select className="form-select" id="floatingSelectGrid" name="gender" value={data.item.genderCode} aria-label="Floating label select example" >
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                            <option value="3">Other</option>
                                        </select>
                                        <label for="floatingSelectGrid">Gender</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text" name="address" className="form-control" id="" value={data.item.addressStreet} />
                                        <label for="">Street</label>
                                    </div>
                                </div>


                            </div>
                            <div className="row g-2 pt-2">
                            <div className="col-md">
                                    <div className="form-floating">
                                        <input type="email" name="email" className="form-control" id="" value={data.item.addressCity} />
                                        <label for="">City </label>
                                        {/* <div className="invalid-feedback">
                                            Please enter email.
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text" name="address" className="form-control" id=""  value={data.item.addressState}/>
                                        <label for="">State</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-2 pt-2">
                            <div className="col-md">
                                    <div className="form-floating">
                                        <input type="email" name="email" className="form-control" id="" value={data.item.addressCountry} />
                                        <label for="">Country </label>
                                        {/* <div className="invalid-feedback">
                                            Please enter email.
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text" name="address" className="form-control" id=""  value={data.item.addressPostalCode}/>
                                        <label for="">Postal Code</label>
                                    </div>
                                </div>
                            </div>

    </form>
           : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
