import React from "react";

export default function Block({ text, moveToNull, index }) {
  return (
    <div className="border" onClick={() => moveToNull(index)}>
      <span>{text}</span>
    </div>
  );
}
