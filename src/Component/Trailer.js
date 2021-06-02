import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function Trailer({ blocks }) {
  const { traailer } = useParams();
  const f = () => blocks.filter((z) => z.id === traailer)[0];
  return (
    <div className=" jfx">
      <div className="move-img">
        <ReactPlayer controls width="100%" height="926px" url={f().trailer} />
      </div>
      <div className="info-contain">
        <h4>{f().title}</h4>
        <span>
          <div style={{ margin: "0 5px 0 0" }}>
            <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
          </div>
          <div style={{ margin: 0 }}>{f().rating}</div>
        </span>
      </div>
    </div>
  );
}

export default Trailer;
