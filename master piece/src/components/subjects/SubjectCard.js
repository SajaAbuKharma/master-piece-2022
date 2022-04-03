import React from "react";
import "./Subjects.css";
import { useNavigate } from "react-router-dom";

function SubjectCard(props) {
  let navigate = useNavigate();
  let logged = localStorage.getItem("logged_user");
  let { subjectsData, blocked } = props;
  return (
    <div className="subject-item">
      <div className="subject-container">
        <div className="img">
          <img src={`subject/${subjectsData.src}`} alt="subject" />
        </div>
        <div className="text">
          <h3>
            Subject: <b>{subjectsData.title}</b>
          </h3>
          <h4>
            Teacher: <b>{subjectsData.ins}</b>
          </h4>
          <p className="price">
            Price: <b>{subjectsData.price} JD /per season</b>
          </p>
          <p className="time">
            Date: <b>{subjectsData.time} /</b> <b>{subjectsData.time2} </b>
          </p>
          <p className="available">
            Status: <b>Available</b>{" "}
          </p>
          <button
            disabled={blocked === "yes" && logged ? "disabled" : ""}
            className={blocked === "yes" && logged ? "btn disabled" : "btn"}
            onClick={() => {
              logged
                ? navigate(`/bookingForm/${subjectsData.id}`)
                : sessionStorage.setItem("from", "listing") ||
                  navigate("/Login");
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubjectCard;
