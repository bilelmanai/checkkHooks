import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
import "./ItemCard.css";
const ItemCard = ({ block }) => {
  return (
    <div className="contain">
      <div className="move-img">
        <Link to={`/${block.id}`}>
          <img src={block.posterURL} alt={block.title} />
        </Link>
      </div>
      <div className="info-contain">
        <h4>{block.title}</h4>

        <span>
          <div style={{ margin: "0 5px 0 0" }}>
            <FontAwesomeIcon icon={faStar} size="1x" color="yellow" />
          </div>
          <div style={{ margin: 0 }}>{block.rating}</div>
        </span>
      </div>
      <div className="description">
        <h4>description:</h4>
        <p>{block.description}</p>
      </div>
    </div>
  );
};

export default ItemCard;
