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
    nullTracker: 3,
  };

  moveToNull = (index, index2) => {
    const blocks = this.state.blocks;
    let nullTracker = this.state.nullTracker;
    if (blocks[index][index2] === null) {
      alert("You can't move this block");
      return;
    } else if (blocks[index].indexOf(null) - 1 === index2) {
      blocks[index][index2 + 1] = blocks[index][index2];
      blocks[index][index2] = null;
    } else if (
      blocks[index].indexOf(null) + 1 === index2 &&
      index === nullTracker
    ) {
      blocks[index][index2 - 1] = blocks[index][index2];
      blocks[index][index2] = null;
    } else if (
      blocks[nullTracker].indexOf(null) ===
        blocks[index].indexOf(blocks[index][index2]) &&
      nullTracker - 1 === index
    ) {
      blocks[index + 1][index2] = blocks[index][index2];
      blocks[index][index2] = null;
      nullTracker -= 1;
    } else if (
      blocks[nullTracker].indexOf(null) ===
        blocks[index].indexOf(blocks[index][index2]) &&
      nullTracker + 1 === index
    ) {
      blocks[index - 1][index2] = blocks[index][index2];
      blocks[index][index2] = null;
      nullTracker += 1;
    } else {
      alert("You can't move this block");
    }
    this.setState({
      nullTracker,
      blocks,
    });
  };

  render() {
    return (
      <div>
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
