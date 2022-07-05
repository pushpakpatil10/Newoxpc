import { Link, useLocation, useNavigate } from "react-router-dom";

import React ,{useEffect} from 'react'
export default function Patient() {
    const [status, setStatus] = React.useState(0);
    const radioHandler = (status) => {
        setStatus(status);
    };
    const navigate = useNavigate();
    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
        getAllPatient();
    }, []);


    const getAllPatient = async () => {
        fetch(`${url}`)
        .then(res => res.json())
        .then(
        )
    }
    return (

        <div id="main" className="main">
            <div className="card">
                <div className="card-body"> 
                    <form className='pt-2'>
                        <div className='container-fluid'>
                       <div className="card-header"><a href=""></a> <a   onClick={() => navigate(-1)}>Back</a> \ New Patient</div>
                            <p className='text-center p-2'>Search By PDS</p>
                            <div className='text-center'>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={status === 1} onClick={(e) => radioHandler(1)} />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Search By Detail
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={status === 2} onClick={(e) => radioHandler(2)} />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        Search By NHS Number
                                    </label>
                                </div>
                            </div>
                            {/* code for show hide  */}
                            {status === 1 &&
                                <div className='row'>
                                    <div className="col-1"></div>
                                    <div className="col-md-3">
                                        <div className="form-floating">
                                            <input type="text" className="form-control " id="" />
                                            <label for="">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="" />
                                            <label for="">Family Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-floating">
                                            <input type="date" className="form-control" id="" />
                                            <label for="">Date of Birth</label>
                                        </div>
                                    </div>
                                    <div className="col-1"></div>
                                </div>
                            }

                            {
                                status == 2 &&

                                <div className='row'>
                                    <div className="col-3"></div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" />
                                            <label for="">NHS Number</label>
                                        </div>
                                        <div className="col-3"></div>
                                    </div>
                                </div>

                            }

                            {/* code for show hide  */}

<hr></hr>

                            <div className="row g-2 pt-2">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input name="firstName" type="text" className="form-control " id="" />
                                        <label for="">First Name</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text" name="lastName" className="form-control" id="" />
                                        <label for="">Last Name</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-2 pt-2">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="email" name="email" className="form-control" id="" />
                                        <label for="">Email Address</label>
                                        {/* <div className="invalid-feedback">
                                            Please enter email.
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="email" name="nhsNumber" className="form-control" id="" />
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
                                        <input type="text" name="phoneNumber" className="form-control" id="" />
                                        <label for="">Phone Number</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="date" name="DOB" className="form-control" id="" />
                                        <label for="">Date of Birth</label>
                                    </div>
                                </div>

                            </div>
                            <div className="row g-2 pt-2">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <select className="form-select" id="floatingSelectGrid" name="gender" aria-label="Floating label select example" >
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                            <option value="3">Other</option>
                                        </select>
                                        <label for="floatingSelectGrid">Gender</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input type="text" name="address" className="form-control" id="" />
                                        <label for="">Address</label>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="text-center p-2">
                            <button className='btn btn-primary m-1' type='submit' >Save</button>
                            <button className='btn btn-secondary  m-1' type='button'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}