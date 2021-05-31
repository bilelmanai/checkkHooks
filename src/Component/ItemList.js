import React from "react";
import Add from "./Add";
import ItemCard from "./ItemCard";
import "./ItemList.css";
import { v4 as uuidv4 } from "uuid";

const ItemList = ({ blocks, setBlocks, btsearch, seach, star }) => {
  return (
    <div className="itemlist">
      {btsearch === false
        ? star === 0
          ? blocks.map((x) => <ItemCard block={x} key={uuidv4()} />)
          : blocks
              .filter((x) => x.rating < star + 0.5 && x.rating > star - 0.5)
              .map((x) => <ItemCard block={x} key={uuidv4()} />)
        : star === 0
        ? blocks
            .filter((x) => x.title.toLowerCase().includes(seach.toLowerCase()))
            .map((x) => <ItemCard block={x} key={uuidv4()} />)
        : blocks
            .filter((x) => x.title.toLowerCase().includes(seach.toLowerCase()))
            .filter((x) => x.rating < star * 2 + 1 && x.rating > star * 2 - 1)
            .map((x) => <ItemCard block={x} key={uuidv4()} />)}
      <Add blocks={blocks} setBlocks={setBlocks}></Add>
    </div>
  );
};

export default ItemList;
