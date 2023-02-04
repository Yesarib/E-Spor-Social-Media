import React from "react";
import Button from '@mui/material/Button';
import "./login.css";
import { Link } from "@mui/material";

const Login = () => {
  
  return (
    <section className="vh-100 ana">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{borderRadius: "1rem;"}}>
                <div className="card-body p-5 text-center">

                  <h3 className="mb-5">Sign in</h3>

                  <div className="form-outline mb-4">
                    <label style={{float:'left'}} className="form-label" for="typeEmailX-2">E-mail</label>
                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="E-mail"/>
                  </div>

                  <div className="form-outline mb-4">
                    <label style={{float:'left'}} className="form-label" for="typePasswordX-2">Password</label>
                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password"/>
                  </div>

                  {/* <!-- Checkbox --> */}
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label" for="form1Example3"> Remember password </label>
                  </div>

                  <Button className="button" type="submit" href="">Login</Button>

                  <hr className="my-4"/>

                  <p style={{color:'black'}}>Don't have an account?</p>
                  <Link style={{color:'red',textDecoration:'none'}} href='/register'>Register</Link>

                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Login;

