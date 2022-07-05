import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css";
import LoadingSpinner from './Layout Component/LoadingSpinner';
const { useState } = React;


function Dashboard() {

  const url = "https://oxpc-backend-api.azurewebsites.net/api";
  const navigate = useNavigate();
  const [ModuleDataPatient, setModuleDataPatient] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  //const url = process.env.REACT_APP_API_URL;
  var CryptoJS = require("crypto-js");

  const pad = {
    paddingRight: "10%"
  }

  const handler = (event) => {
    debugger;
    try {
      setIsLoading(true);
      fetch(`${url}/Consent/Procedure/GetAllPatient?name=${event.target.value}`).then((res) => {
        res.json().then((result) => {
          debugger
          var passphras = "3f18a233-9291-49bd-bed8-8e5441ede658" + new Date().toISOString().split('T')[0].replace('-', '').replace('-', '');
          var bytes = CryptoJS.AES.decrypt(result, passphras);
          var body = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
          setIsLoading(false);
          setModuleDataPatient(body);
          sessionStorage.setItem("data",body)
        });
      });
    }
    catch {
      console.log(console.error)
      setIsLoading(false);
    }
  };
  return (
    <div>

      <div id="main" className="main">
        <section className="section dashboard">
          <div className='bg-gray-200 p-10'>
            <div className="md:w-1/2 lg:w-1/3 m-auto border ">
              <div className="row">
                <div className="row">
                  <div className="col text-left">
                    <form className="bg-gray-200 p-5 ">


                      <input onKeyUp={(e) => handler(e)}
                        type="text"
                        name="text" style={{
                          width: "30%", borderRadius: "20px", border: "1px solid lightgrey !important"
                        }}
                        placeholder="Search Patient by name"
                        className="bg-white p-2 w-3/4 outline-none "
                      />
                      <button type="submit" style={{ borderRadius: "20px", marginLeft: "-3%" }} className="p-2 text-center text-blue-500 w-1/4 bg-white border-0">
                        <i class="bi bi-search rounded-circle" ></i>
                      </button>
                    </form>
                  </div>
                </div>
                {
                  ModuleDataPatient.length > 0 &&
                  <section class="section mt-2">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="card">
                          <div class="card-body">
                            <table class="table datatable" id="example">
                              <thead>
                                <tr>
                                  <th scope="col">#</th>
                                  <th scope="col">Name</th>
                                  <th scope="col">Mobile number </th>
                                  <th scope="col">Email </th>
                                </tr>
                              </thead>
                              <tbody>
                                {isLoading ? <LoadingSpinner /> :

                                  <>
                                    {
                                      ModuleDataPatient ?
                                        ModuleDataPatient.map((item, i = 1) =>
                                          <>
                                            <tr onClick={() => navigate('/PatientProcedure', { state: { item } })}>
                                              <th >{i}</th>
                                              <td>{item.fullName}</td>
                                              <td>{item.mobilePhone}</td>
                                              <td>{item.emailAddress}</td>
                                            </tr>
                                          </>
                                        ) : null
                                    }
                                  </>

                                }  </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                }
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "1%" }}>
            <div className='bg-gray-200 p-10 '>
              <div className="md:w-1/2 lg:w-1/3 m-auto border shadow">
                <div className="row">


                  <div className="row pt-4">
                    <div className="col-md-1  text-center"></div>
                    <div className="col-md-3  text-center">
                      <Link to="/Patient"> <div id="suser" class=" col-auto ms-sm-2 mx-1 card-block py-0 text-center radio">
                        <div to="/Patient" class="opt-icon"><i class="bi bi-person-plus-fill" style={{ fontSize: "60px " }}></i></div>
                        <p><b>Add new patient</b></p>
                      </div></Link>

                    </div>

                    <div className="col-md-3 text-center" >

                      <div id="suser" class=" col-auto ms-sm-2 mx-1 card-block py-0 text-center radio">
                        <div to="/Patient" class="opt-icon"><i class="bi bi-journal-check" style={{ fontSize: "60px" }}></i></div>
                        <p><b>All survey</b></p>
                      </div>

                    </div>
                    <div className="col-md-3 text-center" >
                      <div id="suser" class=" col-auto ms-sm-2 mx-1 card-block py-0 text-center radio" onClick={() => navigate('/tableData')}>
                        <div to="/Patient" class="opt-icon"><i class="bi bi-file-medical" style={{ fontSize: "60px" }}></i></div>
                        <p><b>All procedure</b></p>
                      </div>
                    </div>
                    <div className="col-md-1  text-center"></div>

                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>

      </div>
      {/* <Footer/> */}

    </div>
  )
}
export default Dashboard;