import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./ItemCard.css";
const ItemCard = ({ block }) => {
  return (
    <a href="#1" className="contain">
      <div className="move-img">
        <img src={block.posterURL} alt={block.title} />
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
    </a>
  );
};

export default ItemCard;
