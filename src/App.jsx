import React from "react";
import "./App.css";
import DivBlock from "./componets/Blocks";

class App extends React.Component {
  state = {
    blocks: [
      {
        key: 15,
      },
      {
        key: 2,
      },
      {
        key: 1,
      },
      {
        key: 12,
      },
      {
        key: 8,
      },
      {
        key: 5,
      },
      {
        key: 6,
      },
      {
        key: 11,
      },
      {
        key: 4,
      },
      {
        key: 9,
      },
      {
        key: 10,
      },
      {
        key: 7,
      },
      {
        key: 3,
      },
      {
        key: 14,
      },
      {
        key: 13,
      },
      {
        key: null,
      },
    ],
    nullTracker: 15,
  };

  moveToNull = (index) => {
    const blocks = this.state.blocks;
    let nullTracker = this.state.nullTracker;
    if (nullTracker === index) {
      alert("You can't move this block");
      return;
    } else if (nullTracker - 1 === index) {
      blocks[nullTracker].key = blocks[index].key;
      blocks[index].key = null;
      nullTracker -= 1;
    } else if (nullTracker + 1 === index) {
      blocks[nullTracker].key = blocks[index].key;
      blocks[index].key = null;
      nullTracker += 1;
    } else if (nullTracker - 4 === index) {
      blocks[nullTracker].key = blocks[index].key;
      blocks[index].key = null;
      nullTracker -= 4;
    } else if (nullTracker + 4 === index) {
      blocks[nullTracker].key = blocks[index].key;
      blocks[index].key = null;
      nullTracker += 4;
    } else {
      alert("You can't move this block");
      return;
    }
    this.setState({
      nullTracker,
      blocks,
    });
  };

  render() {
    return (
      <div>
        <DivBlock blocks={this.state.blocks} moveToNull={this.moveToNull} />
      </div>
    );
  }
}

export default App;
