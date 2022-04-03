import React from "react";
import { useNavigate } from "react-router-dom";
import "./popup.css";
const Popup = (props) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    let resArr = JSON.parse(localStorage.getItem("reservations"));
    resArr.push(props.res);
    localStorage.setItem("reservations", JSON.stringify(resArr));
    props.setDisabledItem(resArr);
    navigate("/subjects");
  };
  return (
    <div className="popup-box">
      <div className="box">
        <div className="box-title">
          <h3>You are Booking Successfully</h3>
        </div>
        <div className="box-btns">
          <button className="finalBtn btn-success" onClick={handleSubmit}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
