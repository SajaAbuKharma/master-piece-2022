import React, { useState } from "react";
import "./user_style.css";

function User() {
  var user = JSON.parse(localStorage.getItem("logged_user"));
  var [{ fname, lname, user_email, password }, setInput] = useState({
    fname: user.fName,
    lname: user.lName,
    user_email: user.email,
    password: user.password,
  });

  const inputChange = (e) => {
    setInput((currentState) => {
      return { ...currentState, [e.target.name]: e.target.value };
    });
  };

  const Update = () => {
    var users = JSON.parse(localStorage.getItem("users"));
    var user = JSON.parse(localStorage.getItem("logged_user"));
    var userUpdate = {
      email: user_email,
      fName: fname,
      lName: lname,
      password: password,
    };

    users.map((ele, i) => {
      if (ele.email === user.email && ele.password === user.password) {
        users.splice(i, 1);
        users.push(userUpdate);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("logged_user", JSON.stringify(userUpdate));
        setInput({
          user_email: users.email,
          fName: users.fName,
          lName: users.lName,
          password: users.password,
        });
      }
    });
  };
  var res = JSON.parse(localStorage.getItem("reservations"));
  var counter = 0;
  res
    .filter((ele) => {
      return ele.email === user_email;
    })
    .map((ele) => {
      counter++;
    });
  var email = JSON.parse(localStorage.getItem("logged_user")).email;
  return (
    <section id="services" className="features-area mt-0">
      <div className="container user-padding">
        <div className="row gutters">
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="account-settings">
                  <div className="user-profile">
                    <div className="user-avatar">
                      <img src="./images.png" alt="Maxwell Admin" />
                    </div>
                    <h5 className="user-name text-center">
                      {localStorage.getItem("logged_user")
                        ? JSON.parse(localStorage.getItem("logged_user"))
                            .fName +
                          " " +
                          JSON.parse(localStorage.getItem("logged_user")).lName
                        : ""}
                    </h5>
                    <h6 className="user-email text-center">
                      {localStorage.getItem("logged_user")
                        ? JSON.parse(localStorage.getItem("logged_user")).email
                        : ""}
                    </h6>
                    <br />
                    <p
                      style={{ fontSize: "smaller", fontWeight: "bolder" }}
                      className="text-center"
                    >
                      Number of Lessons Taken: {counter}
                      <span style={{ color: "rgb(50, 214, 50)" }}>{}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 mb-4">
            <div className="card h-100 ">
              <div className="card-body ">
                <div className="row gutters">
                  <h6 className="ml-4 mb-2 text-warning">Personal Details</h6>
                  <form className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12">
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12">
                      <label for="fullName">Name</label>
                      <input
                        type="text"
                        name="fname"
                        className="form-control"
                        id="fullName"
                        value={fname}
                        placeholder="Enter full name"
                        onChange={inputChange}
                      />
                    </div>
                    <br />
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12">
                      <label for="fullName">Name</label>
                      <input
                        type="text"
                        name="lname"
                        className="form-control"
                        id="fullName2"
                        value={lname}
                        placeholder="Enter full name"
                        onChange={inputChange}
                      />
                    </div>
                    <br />
                    <div className="col-xl-12 col-lg-12 col-md-8 col-sm-6 col-12">
                      <label for="eMail">Email</label>
                      <input
                        type="email"
                        name="user_email"
                        className="form-control"
                        id="eMail"
                        value={user_email}
                        placeholder="Enter email ID"
                        onChange={inputChange}
                      />
                    </div>
                    <br />
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12">
                      <label for="website">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="website"
                        value={password}
                        placeholder="password"
                        onChange={inputChange}
                      />
                    </div>
                    {/* <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12">
                      <label for="image">Profile Picture</label>
                      <input
                        type="file"
                        name="image"
                        className="form-control"
                        id="image"
                        value=""
                        placeholder="password"
                      />
                    </div> */}
                    <div className="text-left">
                      <button
                        id="submit"
                        name="edit_btn"
                        className="btn btn-warning mt-2 ml-3"
                        style={{ display: "block" }}
                        onClick={Update}
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
                <br />
              </div>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr className="text-center">
                <th scope="col">#</th>
                <th scope="col">Subject</th>
                <th scope="col">Instructor</th>
                <th scope="col">Price</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {res
                .filter((ele) => {
                  return ele.email === user_email;
                })
                .map((ele, i) => {
                  return (
                    <tr className="text-center">
                      <th scope="row">{i + 1}</th>
                      <td>{ele.title}</td>
                      <td>{ele.ins}</td>
                      <td>{ele.price} JD / Season</td>
                      <td>{ele.date}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default User;
