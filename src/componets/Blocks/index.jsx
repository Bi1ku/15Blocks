import React from "react";
import Block from "./ActualBlock";

export default function DivBlock({ blocks, moveToNull }) {
  return (
    <div className="App">
      {blocks.map((block, index) => (
        <Block text={block.key} moveToNull={moveToNull} index={index} />
      ))}
    </div>
  );
}
