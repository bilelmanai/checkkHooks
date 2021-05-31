import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTimes } from "@fortawesome/free-solid-svg-icons";
function Star({ star, setstar, hoverstar, setHoverstar }) {
  return (
    <div className="stardiv">
      {[...Array(5)].map((x, i) => {
        return (
          <label>
            <input type="radio" name="star" onClick={() => setstar(i + 1)} />
            <FontAwesomeIcon
              onMouseEnter={() => setHoverstar(i + 1)}
              onMouseLeave={() => setHoverstar(0)}
              className="staar"
              icon={faStar}
              size="2x"
              color={i + 1 <= (star || hoverstar) ? "yellow" : "black"}
            />
          </label>
        );
      })}
      <label className="label1" style={{ marginLeft: "65px" }}>
        <input type="radio" name="star" onClick={() => setstar(0)} />
        <FontAwesomeIcon
          className="staar"
          icon={faTimes}
          size="2x"
          color="rgb(228, 217, 217)"
        />
      </label>
    </div>
  );
}

export default Star;
