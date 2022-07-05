
import "./login.css"
import React, { useState } from "react";
import Swal from "sweetalert2";


export default function Login({ setloggedIn, isLogin }) {
    //#region 
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "a",
            password: "a"
        },
    ];

    const errors = {
        uname: "Invalid username",
        pass: "Invalid password"
    };

    const handleSubmit = (event) => {
        debugger;

        //Prevent page reload
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                Swal.fire(
                    'login sucessfully'
                )
                setIsSubmitted(true);
                debugger;
                state.redirect = true;
                setloggedIn(false);
                isLogin = false;
                localStorage.setItem('userName', userData.username);
                if (state.redirect = true) {
                    let timerInterval
                    Swal.fire({
                        title: 'login sucessfully',
                        timer: 400,
                        didOpen: () => {
                            timerInterval = setInterval(() => {
                            }, 100)
                        },
                        willClose: () => {
                            clearInterval(timerInterval)
                        }
                    })
                }
                if (isLogin = false) {
                }


            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });

        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    //#endregion



    const state = {
        redirect: false,

    }
    // const handleLogin = () => {
    //     debugger;
    //     state.redirect = true;
    //     setloggedIn(false);
    //     isLogin = false;
    //     // if (state.redirect == true) {
    //     //     navigate('/allModules');
    //     // }
    // }


    const renderForm = (
        <>
            {/* Header with oxdh and oxpr logo */}
            <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-between">
                    <a href="/Home" className="logo d-flex align-items-center">
                        <img src="assets/img/OXDH.png" alt="" width={150} />
                    </a>
                </div>
                <div className="search-bar">
                </div>
                <nav className="header-nav ms-auto">
                    <div className="m-3 ">
                        <a href="/Home" className="logo">
                            <img src="assets/icons/oxpr logo.png" alt="" width={150} />
                        </a>
                    </div>

                </nav>
            </header>
            {/* form main element */}
            <div >
                <div className=" d-flex justify-content-center mt-5 ">
                    <div class="col-12 col-sm-6 col-lg-4 mt-5">
                        <div class="card border-info ">
                            <div class="card-body">
                                <h4 class="card-title text-center">Login</h4>
                                {/* <h6 class="card-subtitle mb-2">Romania</h6> */}
                                <div className="card-text body-form">
                                    <form onSubmit={handleSubmit}>
                                        <div className="col-md">
                                            <div className="form-floating">
                                                <input type="text" className="form-control " name="uname" />
                                                {renderErrorMessage("uname")}
                                                <label for="floatingInputGrid "><span className='text-center pl-4'>Username</span></label>
                                            </div>
                                        </div>
                                        <div className="col-md mt-3">
                                            <div className="form-floating">
                                                <input type="text" className="form-control " name="pass" />
                                                {renderErrorMessage("pass")}
                                                <label for="floatingInputGrid text-center">Password</label>
                                            </div>
                                        </div>
                                        <div className='row mt-5'>
                                            <div className='col-12 text-center'><div className=''><button type="submit" className=" text-center btn prBtn btn-lg">LOGIN</button></div></div>
                                        </div>
                                    </form>
                                </div>

                                <div className="card-footer text-center mt-4">
                                    <div className='' ><a href="#" className=''>Forgot your password</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
    return (
        <div className="app">
            <div className="login-form">
                <div className="title"></div>
                {isSubmitted ? <div></div> : renderForm}
            </div>
        </div>
    );
}

