import React from "react";
import Block from "./Block";

export default function DivBlock({ blocks, moveToNull }) {
  return (
    <div className="App">
      {blocks.map((block, index, state) =>
        blocks.map((v, index2) => (
          <div
            className="border"
            onClick={() => moveToNull(index, index2)}
            key={blocks[index][index2]}
          >
            <Block
              text={block[index2]}
              moveToNull={moveToNull}
              index={index}
              index2={index2}
            />
          </div>
        ))
      )}
    </div>
  );
}
