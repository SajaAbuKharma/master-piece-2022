import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import subjectsData from "./subjectsData";
import Popup from "./popup";
import "./formStyle.css";
import SweetAlert from "react-bootstrap-sweetalert";

function BookingForm(props) {
  // Gitting Product Id from the param (URL)
  let { id } = useParams();

  //State for the submit button to show the conformation pop-up
  const [submitted, setSubmitted] = useState(false);

  //State to pass reservation object to PopUp component
  const [res, setRes] = useState(null);

  //To handle the case if there is no key named reservation
  if (!localStorage.getItem("reservations"))
    localStorage.setItem("reservations", JSON.stringify([]));

  // To get the subject using Id from params//
  let subject;
  for (let obj of subjectsData) {
    if (obj.id === +id) {
      subject = { ...obj };
    }
  }

  // To get the user's info in order to auto fill the input fields
  let [userInfo, setUserInfo] = useState({
    ...JSON.parse(localStorage.getItem("logged_user")),
    tel: "",
    date: "",
    ins: subject.ins,
    title: subject.title,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let res;
    let isEmpty = false;
    for (const [key, value] of Object.entries(userInfo)) {
      if (value.trim().length === 0) {
        isEmpty = true;
        break;
      }
    }
    if (isEmpty) {
      alert("fill in all inputs");
    } else {
      let { fName, lName, email, tel, date, ins, title, price } = userInfo;
      res = {
        id: id,
        ins: ins,
        title: title,
        fName: fName,
        lName: lName,
        email: email,
        tel: tel,
        date: date,
        price: subject.price,
      };
    }
    console.log(res);
    // To show the POPUP message after clicking submit
    setSubmitted(true);
    // To carry the reservation object as a prop to the POPUP component
    setRes(res);
  };

  return (
    <>
      <div className="subject-form-container ">
        <h1>Booking</h1>
        <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
          <div className="textsCont">
            <div className="texts" id="texts1">
              <input
                onChange={handleInputChange}
                value={userInfo.fName}
                required
                placeholder="First Name"
                type="text"
                name="fName"
                id="fName"
              />
              <input
                onChange={handleInputChange}
                value={userInfo.lName}
                required
                placeholder="Last Name"
                type="text"
                name="lName"
                id="lName"
              />
            </div>
            <div className="texts" id="texts2">
              <input
                value={userInfo.email}
                required
                placeholder="Email"
                onChange={() => {
                  return null;
                }}
                type="email"
                name="email"
                id="email"
                disabled
              />
              <input
                type="tel"
                pattern="[0-9]{10}"
                placeholder="Mobile Number"
                name="tel"
                id="tel"
                onInput={handleInputChange}
                required
              />
            </div>
          </div>
          <div className="date-form">
            <div className="date-box">
              <input
                onChange={handleInputChange}
                id="date"
                type="radio"
                name="date"
                value={subject.time}
                required
              />
              <label htmlFor="date">{subject.time}</label>
            </div>
            <div className="date-box">
              <input
                id="date2"
                type="radio"
                name="date"
                value={subject.time2}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="date2">{subject.time2}</label>
            </div>
          </div>
          <div className="booking-total">
            <p>Price : {subject.price} JD</p>
          </div>
          <div className="submit">
            <input type="submit" value="Book Now !" />
          </div>
        </form>
      </div>
      {submitted && (
        <Popup
          setDisabledItem={props.setDisabledItem}
          res={res}
          setSubmitted={setSubmitted}
        />
      )}
    </>
  );
}

export default BookingForm;
