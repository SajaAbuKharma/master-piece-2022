import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Popup1 from "./popup1";
import "../contactUs/Contactus.css";

function ContactUs() {
  let obj = { fName: "", lName: "", Email: "" };

  let logged = JSON.parse(localStorage.getItem("logged_user"))
    ? JSON.parse(localStorage.getItem("logged_user"))
    : obj;

  const [submitted, setSubmitted] = useState(false);
  const [formInfo, setFormInfo] = useState(logged);
  const handleChange = (e, attr) => {
    setFormInfo({ ...formInfo, [attr]: e.target.value });
  };

  //********** Handle Date ********/
  let today = new Date();
  const start = today.toISOString();
  const valueCut1 = start.substring(0, 10);
  let [thisDay, setThisDay] = useState(valueCut1);

  const handleDateChange = (e) => {
    setThisDay(e.target.value);
  };

  const checkConsults = (e) => {
    e.preventDefault();

    let userInfo = {
      fName: formInfo.fName,
      lName: formInfo.lName,
      email: formInfo.email,
      Phone: formInfo.Phone,
      Date: thisDay,
      message: formInfo.message,
    };

    if (localStorage.getItem("consults")) {
      if (formInfo.fName.length > 4 && formInfo.lName.length > 4) {
        let consults = JSON.parse(localStorage.getItem("consults"));
        consults.push(userInfo);
        localStorage.setItem("consults", JSON.stringify(consults));
        setSubmitted(true);
      } else {
        alert("wrong");
      }
    } else {
      const consults = [];
      consults.push(userInfo);
      localStorage.setItem("consults", JSON.stringify(consults));
      setSubmitted(true);
    }
  };

  return (
    <>
      <div class="container contact-container color">
        <div class="content">
          <div class="left-side">
            <div class="address details">
              <i class="fas fa-map-marker-alt"></i>
              <div class="topic">Address</div>
              <div class="text-one">Amman, Jordan</div>
            </div>
            <div class="phone details">
              <i class="fas fa-phone-alt"></i>
              <div class="topic">Phone</div>
              <div class="text-one">+962777777777</div>
              <div class="text-two">+962799999999</div>
            </div>
            <div class="email details">
              <i class="fas fa-envelope"></i>
              <div class="topic">Email</div>
              <div class="text-one">info@learning-hub.com</div>
              <div class="text-two">support@learning-hub.com</div>
            </div>
          </div>
          <div class="right-side">
            <div class="topic-text">Send us a message</div>
            <p>If you have any inquiry, dont hesitate to send us a message</p>
            {!localStorage.getItem("logged_user") && (
              <p>
                Kindly fill the below information inorder to call you or{" "}
                <Link
                  onClick={() => {
                    sessionStorage.setItem("from", "call");
                  }}
                  to="/Login"
                >
                  <span id="contSpan">Login</span>
                </Link>
              </p>
            )}
            <form onSubmit={checkConsults} className="register-form">
              <div class="input-box">
                <input
                  value={formInfo.fName}
                  onChange={(e) => {
                    handleChange(e, "fName");
                  }}
                  name="fName"
                  className="contactInput"
                  type={"text"}
                  id="firstName"
                  placeholder="First Name"
                  required
                ></input>
                {formInfo.fName.length <= 4 && formInfo.fName.length > 0 ? (
                  <small className="errorMessage1">
                    User name must be more than 4
                  </small>
                ) : (
                  ""
                )}
              </div>
              <div class="input-box">
                <input
                  name="lName"
                  value={formInfo.lName}
                  onChange={(e) => {
                    handleChange(e, "lName");
                  }}
                  className="contactInput"
                  type={"text"}
                  id="lastName"
                  placeholder="Last Name"
                  required
                ></input>
                {formInfo.lName.length <= 4 && formInfo.lName.length > 0 ? (
                  <small className="errorMessage1">
                    User name must be more than 4
                  </small>
                ) : (
                  ""
                )}
              </div>
              <div class="input-box">
                <input
                  name="email"
                  value={formInfo.email}
                  onChange={handleChange}
                  className="contactInput"
                  type={"email"}
                  id="Email"
                  placeholder="Enter your email"
                  required
                ></input>
              </div>
              <div className="input-box">
                <input
                  name="Phone"
                  value={formInfo.Phone}
                  onChange={handleChange}
                  className="contactInput"
                  type={"telephone"}
                  id="Phone"
                  placeholder="Enter your mobile number"
                  required
                />
                <div className="input-box">
                  <input
                    name="Date"
                    onChange={(e) => handleDateChange(e)}
                    value={formInfo.Date}
                    className="contactInput"
                    type={"date"}
                    min={valueCut1}
                    value={thisDay}
                    id="Date"
                    placeholder="Date"
                    required
                  />
                </div>
                <div className="input-box message-box">
                  <input
                    className="input-message"
                    name="message"
                    value={formInfo.message}
                    onChange={handleChange}
                    type={"text"}
                    id="message"
                    placeholder="Type your message"
                  ></input>
                </div>
                <button className="button">Submit</button>
              </div>
            </form>{" "}
          </div>
        </div>
      </div>
      {submitted && <Popup1 />}
    </>
  );
}

export default ContactUs;
