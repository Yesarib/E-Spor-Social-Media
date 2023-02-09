import React from "react";
import Button from "@mui/material/Button";
import { Link, useTheme, TextField, Typography, Box } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Dropzone from "react-dropzone";

const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  nick: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});
const initialValuesRegister = {
  firstName: "",
  lastName: "",
  nick: "",
  email: "",
  password: "",
};

const Register = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();

  const register = async (values, onSubmitProps) => {
    // this allows us to send form info with image
    const formData = new FormData();
    for (let value in values) {
      formData.append(value, values[value]);
    }
    formData.append("picturePath", values.picture.name);

    const savedUserResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",
        body: formData,
      }
    );
    const savedUser = await savedUserResponse.json();
    onSubmitProps.resetForm();

    if (savedUser) {
      navigate("/login");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    await register(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesRegister}
      validationSchema={registerSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <section className="vh-100 ana">
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div
                    className="card shadow-2-strong"
                    style={{ borderRadius: "1rem;" }}
                  >
                    <div className="card-body p-5 text-center">
                      <h3 className="mb-5">Sign up</h3>

                      <div className="form-outline mb-4">
                        {/* <label style={{float:'left',marginLeft:'2px'}} className="form-label" for="typeEmailX-2">Name</label> */}
                        <TextField
                          label="FirstName"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.firstName}
                          name="firstName"
                          error={
                            Boolean(touched.firstName) &&
                            Boolean(errors.firstName)
                          }
                          helperText={touched.firstName && errors.firstName}
                          sx={{ gridColumn: "span 2" }}
                        />
                        {/* <input onBlur={handleBlur} onChange={handleChange} value={values.firstName} error={Boolean(touched.firstName) && Boolean(errors.firstName)} type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Name"/> */}
                      </div>

                      <div className="form-outline mb-4">
                        {/* <label style={{float:'left',marginLeft:'2px'}} className="form-label" for="typeEmailX-2">Last name</label>
                        <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Last name"/> */}
                        <TextField
                          label="LastName"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.lastName}
                          name="lastName"
                          error={
                            Boolean(touched.lastName) &&
                            Boolean(errors.lastName)
                          }
                          helperText={touched.lastName && errors.lastName}
                          sx={{ gridColumn: "span 2" }}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <TextField
                          label="Nick"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.nick}
                          name="nick"
                          error={Boolean(touched.nick) && Boolean(errors.nick)}
                          helperText={touched.nick && errors.nick}
                          sx={{ gridColumn: "span 2" }}
                        />
                        {/* <label style={{float:'left',marginLeft:'2px'}} className="form-label" for="typeEmailX-2">Nick</label>
                        <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Nick"/> */}
                      </div>

                      <div className="form-outline mb-4">
                        <Box
                          gridColumn="span 4"
                          border={`1px solid ${palette.neutral.medium}`}
                          borderRadius="5px"
                          p="1rem"
                        >
                          <Dropzone
                            acceptedFiles=".jpg,.jpeg,.png"
                            multiple={false}
                            onDrop={(acceptedFiles) =>
                              setFieldValue("picture", acceptedFiles[0])
                            }
                          >
                            {({ getRootProps, getInputProps }) => (
                              <Box
                                {...getRootProps()}
                                border={`2px dashed ${palette.primary.main}`}
                                p="1rem"
                                sx={{ "&:hover": { cursor: "pointer" } }}
                              >
                                <input {...getInputProps()} />
                                {!values.picture ? (
                                  <p>Add Picture Here</p>
                                ) : (
                                  <Typography>{values.picture.name}</Typography>
                                )}
                              </Box>
                            )}
                          </Dropzone>
                        </Box>
                      </div>

                      <div className="form-outline mb-4">
                        <TextField
                          label="Email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.email}
                          name="email"
                          error={
                            Boolean(touched.email) && Boolean(errors.email)
                          }
                          helperText={touched.email && errors.email}
                          sx={{ gridColumn: "span 2" }}
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
                          error={
                            Boolean(touched.password) &&
                            Boolean(errors.password)
                          }
                          helperText={touched.password && errors.password}
                          sx={{ gridColumn: "span 2" }}
                        />
                        {/* <label style={{float:'left'}} className="form-label" for="typePasswordX-2">Password</label>
                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password"/> */}
                      </div>

                      {/* <div className="form-outline mb-4">
                        <label style={{float:'left'}} className="form-label" for="typePasswordX-2">Re Password</label>
                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Re Password"/>
                      </div> */}

                      {/* <!-- Checkbox --> */}
                      <div className="form-check d-flex justify-content-start mb-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="form1Example3"
                        />
                        <label className="form-check-label" for="form1Example3">
                          {" "}
                          Remember password{" "}
                        </label>
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
                        Register
                      </Button>

                      <hr className="my-4" />

                      <p style={{ color: "black" }}>Do you have an account?</p>
                      <Link
                        style={{ color: "red", textDecoration: "none" }}
                        href="/login"
                      >
                        Login
                      </Link>
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

export default Register;
