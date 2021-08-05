import React from "react";
import "./App.css";
import DivBlock from "./componets/DivBlock";
import numList from "./constants/numList";

const App = () => {
  const [blocks, setBlocks] = React.useState(numList);

  let up, down;

  const moveToNull = (index, i2) => {
    let right = blocks[index][i2 + 1];
    let left = blocks[index][i2 - 1];
    try { up = blocks[index - 1][i2]; } catch {}
    try { down = blocks[index + 1][i2]; } catch {}
    if (right === null) {
      blocks[index][i2 + 1] = blocks[index][i2];
      blocks[index][i2] = null;
    } else if (left === null) {
      blocks[index][i2 - 1] = blocks[index][i2];
      blocks[index][i2] = null;
    } else if (down === null) {
      blocks[index + 1][i2] = blocks[index][i2];
      blocks[index][i2] = null;
    } else if (up === null) {
      blocks[index - 1][i2] = blocks[index][i2];
      blocks[index][i2] = null;
    } else {
      alert("You can't move this block");
    }
    setBlocks([...blocks]);
  };

  return (
    <div className="container">
      <DivBlock blocks={blocks} moveToNull={moveToNull} />
    </div>
  );
};

export default App;