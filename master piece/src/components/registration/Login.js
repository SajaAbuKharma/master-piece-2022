import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
function Login({ setLogged, setSubmitted }) {
  const navigate = useNavigate();

  const [formGroup, setFormGroup] = useState({
    email: "",
    password: "",
  });

  const loginFormValues = (e) => {
    const { name, value } = e.target;
    setFormGroup({ ...formGroup, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let users = [];
    users = JSON.parse(localStorage.getItem("users"));
    for (let i = 0; i < users.length; i++) {
      if (
        formGroup.email === users[i].email &&
        formGroup.password === users[i].password
      ) {
        localStorage.setItem("logged_user", JSON.stringify(users[i]));
        setLogged(localStorage.getItem("logged_user"));
        setSubmitted(localStorage.getItem("logged_user"));
        switch (sessionStorage.getItem("from")) {
          case "call": {
            navigate("/contactus");
            break;
          }
          case "listing": {
            navigate("/subjects");
            break;
          }
          default:
            navigate("/");
        }
        return;
      }
    }
    alert("Your email or password is not correct ");
  };

  return (
    <div className="logIn">
      <div className="d-flex justify-content-center h-100">
        <div className="card1">
          <div className="card-body">
            <h3>Sign In</h3>
            <form onSubmit={onSubmit} className="login-form">
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control login-form-input"
                  placeholder="Email"
                  name="email"
                  onChange={loginFormValues}
                />
              </div>

              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control login-form-input"
                  placeholder="Password"
                  name="password"
                  onChange={loginFormValues}
                />
              </div>
              <div className="reg">
                <div className="form-group">
                  <input
                    type="submit"
                    value="Login"
                    className="login-btn float-right login_btn2"
                  />
                </div>
                <div className="card-footer2">
                  <div className="d-flex justify-content-center links">
                    Don't have an account?
                    <Link to="/Signup">Sign Up</Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
