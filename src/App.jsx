import React from "react";
import "./App.css";
import DivBlock from "./componets/DivBlock";

class App extends React.Component {
  state = {
    blocks: [
      [15, 2, 1, 12],
      [8, 5, 6, 11],
      [4, 9, 10, 7],
      [3, 14, 13, null],
    ],
  };

  moveToNull = (index, index2) => {
    const blocks = this.state.blocks;
    if (blocks[index].indexOf(null) - 1 === index2) {
      blocks[index][index2 + 1] = blocks[index][index2];
      blocks[index][index2] = null;
    } else if (
      blocks[index].indexOf(null) + 1 === index2 &&
      blocks[index].includes(null)
    ) {
      blocks[index][index2 - 1] = blocks[index][index2];
      blocks[index][index2] = null;
    } else if (
      blocks[index + 1] !== undefined &&
      blocks[index + 1].includes(null) &&
      blocks[index + 1].indexOf(null) ===
        blocks[index].indexOf(blocks[index][index2])
    ) {
      blocks[index + 1][index2] = blocks[index][index2];
      blocks[index][index2] = null;
    } else if (
      blocks[index - 1] !== undefined &&
      blocks[index - 1].includes(null) &&
      blocks[index - 1].indexOf(null) ===
        blocks[index].indexOf(blocks[index][index2])
    ) {
      blocks[index - 1][index2] = blocks[index][index2];
      blocks[index][index2] = null;
    } else {
      alert("You can't move this block");
    }
    this.setState({
      blocks,
    });
  };

  render() {
    return (
      <div className="container">
        <DivBlock
          blocks={this.state.blocks}
          moveToNull={this.moveToNull}
          state={this.state}
        />
      </div>
    );
  }
}

export default App;
