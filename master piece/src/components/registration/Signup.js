import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Signup({ setSubmitted, setLogged }) {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});

  const [formGroup, setFormGrroup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confPassword: "",
  });

  const registerFormValues = (e) => {
    const { name, value } = e.target;
    setFormGrroup({ ...formGroup, [name]: value });
  };

  const validate = (e, values) => {
    e.preventDefault();
    const errors = {};
    const regEmail = /^[A-z0-9._-]+@(hotmail|gmail|yahoo).com$/;
    if (values.firstName.length <= 2) {
      errors.firstName = "First Name is too short!";
    }
    if (values.lastName.length <= 2) {
      errors.lastName = "Last Name is too short!";
    }
    if (!regEmail.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (values.password.length <= 8) {
      errors.password = "Password must be more than 8 characters";
    }
    if (values.confPassword !== values.password) {
      errors.confPassword = "Password is not match";
    }
    setFormErrors(errors);
    if (
      values.firstName.length > 2 &&
      values.lastName.length > 2 &&
      regEmail.test(values.email) &&
      values.password.length > 8 &&
      values.confPassword === values.password
    ) {
      reg();
    }
  };

  const reg = () => {
    let user = {
      fName: formGroup.firstName,
      lName: formGroup.lastName,
      password: formGroup.password,
      email: formGroup.email,
    };
    let arr = [];
    if (localStorage.getItem("users")) {
      arr = JSON.parse(localStorage.getItem("users"));
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].email === formGroup.email) {
          alert("account is exist please go To login Page");
          return;
        }
      }
      arr.push(user);
      localStorage.setItem("users", JSON.stringify(arr));
    } else {
      arr.push(user);
      localStorage.setItem("users", JSON.stringify(arr));
    }
    localStorage.setItem("logged_user", JSON.stringify(user));
    setLogged(localStorage.getItem("logged_user"));
    setSubmitted(localStorage.getItem("logged_user"));
    navigate("/");
  };

  return (
    <section className="Register" id="Register">
      <div className="Register-container">
        <div className="d-flex justify-content-center h-100">
          <div className="card2">
            <div className="card-body">
              <h3>Sign Up </h3>
              <form
                onSubmit={(e) => validate(e, formGroup)}
                id="form"
                className="register-form"
              >
                <div className="input-group form-group register-box">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <div className="inputForm">
                    <input
                      id="firstName"
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                      value={formGroup.firstName}
                      onChange={registerFormValues}
                      required
                    />
                    <small className="errorMsg">{formErrors.firstName}</small>
                  </div>
                </div>{" "}
                <div className="input-group form-group register-box">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                  <div className="inputForm">
                    <input
                      id="lastName"
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastName"
                      value={formGroup.lastName}
                      onChange={registerFormValues}
                      required
                    />
                    <small className="errorMsg">{formErrors.lastName}</small>
                  </div>
                </div>{" "}
                <div className="input-group form-group register-box">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="far fa-envelope"></i>
                    </span>
                  </div>
                  <div className="inputForm">
                    <input
                      id="userEmail"
                      type="email"
                      required
                      className="form-control"
                      placeholder="Email"
                      value={formGroup.email}
                      name="email"
                      onChange={registerFormValues}
                    />{" "}
                    <small className="errorMsg">{formErrors.email}</small>
                  </div>
                </div>
                <div className="input-group form-group register-box">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <div className="inputForm">
                    <input
                      id="userPassword"
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={formGroup.password}
                      onChange={registerFormValues}
                      required
                    />{" "}
                    <small className="errorMsg">{formErrors.password}</small>
                  </div>
                </div>{" "}
                <div className="input-group form-group register-box">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                  <div className="inputForm">
                    <input
                      id="userRePassword"
                      type="password"
                      className="form-control"
                      placeholder="Repet Password"
                      name="confPassword"
                      value={formGroup.confPassword}
                      onChange={registerFormValues}
                      required
                    />{" "}
                    <small className="errorMsg">
                      {formErrors.confPassword}
                    </small>
                  </div>
                </div>
                <div className="reg">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="btn float-right sign_btn1"
                    />
                  </div>
                  <div className="card-footer" id="card-footer">
                    <div className="d-flex justify-content-center links">
                      Already have an account?<Link to="/Login"> Sign in</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
