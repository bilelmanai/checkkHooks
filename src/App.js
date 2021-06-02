import { useState, useEffect } from "react";
import "./App.css";
import ItemList from "./Component/ItemList";
import Data from "./Data";
import Star from "./Star";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Trailer from "./Component/Trailer";
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
    <Router>
      <Switch>
        <Route exact path="/">
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
        </Route>
        <Route path="/:traailer">
          <Trailer blocks={blocks} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
