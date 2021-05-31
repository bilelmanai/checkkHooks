import { useState, useEffect } from "react";
import "./App.css";
import ItemList from "./Component/ItemList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Data from "./Data";
import Star from "./Star";
function App() {
  const [star, setstar] = useState(0);
  const [hoverstar, setHoverstar] = useState(0);
  const [blocks, setBlocks] = useState(Data);
  const [seach, seteach] = useState("");
  const [btsearch, setbtsearch] = useState(false);
  const clickme = () =>
    seach.length === 0 ? setbtsearch(false) : setbtsearch(true);
  useEffect(() => {
    if (seach.length === 0) {
      setbtsearch(false);
    }
  }, [seach]);
  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          name=""
          id="aez"
          onChange={(e) => seteach(e.target.value)}
        />
        <button onClick={clickme}>search</button>
        <div style={{ marginLeft: "20px", float: "left" }}>
          <Star
            star={star}
            setstar={setstar}
            hoverstar={hoverstar}
            setHoverstar={setHoverstar}
          />
        </div>
      </div>
      <ItemList
        star={star}
        blocks={blocks}
        setBlocks={setBlocks}
        btsearch={btsearch}
        seach={seach}
      />
    </div>
  );
}

export default App;
