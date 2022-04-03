import React from "react";
import { useNavigate } from "react-router-dom";
import "./popup1.css";
const Popup1 = (props) => {
  const navigate = useNavigate();

  return (
    <div className="popup-box">
      <div className="box">
        <h3>
          Your message is succesfully sent, we will contact you as soon as
          possible!
        </h3>
        <button className="finalBtn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Popup1;
