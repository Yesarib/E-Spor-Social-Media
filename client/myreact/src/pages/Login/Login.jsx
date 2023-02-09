import React from "react";
import Button from '@mui/material/Button';
import "./login.css";
import { Link, useTheme, TextField  } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "../../states";

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesLogin = {
  email: "",
  password: "",
};

const Login = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    console.log(loggedInResponse)
    const loggedIn = await loggedInResponse.json();
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/");
    }
    else{
      console.log('No user')
    }
  };
  const handleFormSubmit = async (values, onSubmitProps) => {
    await login(values, onSubmitProps);
  };

  return (
    <Formik onSubmit={handleFormSubmit} initialValues={initialValuesLogin} validationSchema={loginSchema}>
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form onSubmit={handleSubmit}>
            <section className="vh-100 ana">
                <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                      <div className="card shadow-2-strong" style={{borderRadius: "1rem;"}}>
                        <div className="card-body p-5 text-center">

                          <h3 className="mb-5">Sign in</h3>

                          <div className="form-outline mb-4">
                          <TextField
                            label="Email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            name="email"
                            error={Boolean(touched.email) && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            sx={{ gridColumn: "span 4" }}
                          />
                            {/* <label style={{float:'left'}} className="form-label" for="typeEmailX-2">E-mail</label>
                            <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="E-mail"/> */}
                          </div>

                          <div className="form-outline mb-4">
                          <TextField
                                label="Password"
                                type="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                error={Boolean(touched.password) && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                                sx={{ gridColumn: "span 4" }}
                              />
                            {/* <label style={{float:'left'}} className="form-label" for="typePasswordX-2">Password</label>
                            <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password"/> */}
                          </div>

                          {/* <!-- Checkbox --> */}
                          <div className="form-check d-flex justify-content-start mb-4">
                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                            <label className="form-check-label" for="form1Example3"> Remember password </label>
                          </div>

                          <Button
                            fullWidth
                            type="submit"
                            sx={{
                              m: "2rem 0",
                              p: "1rem",
                              backgroundColor: palette.primary.main,
                              color: palette.background.alt,
                              "&:hover": { color: palette.primary.main },
                            }}
                          >
                            Login
                          </Button>

                          <hr className="my-4"/>

                          <p style={{color:'black'}}>Don't have an account?</p>
                          <Link style={{color:'red',textDecoration:'none'}} href='/register'>Register</Link>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
          </form>
      )}
      
    </Formik>
  );
};

export default Login;

