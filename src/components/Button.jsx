import React from "react";

export default function Button({text, click}) {
  return (
    <button onClick={click}>{text}</button>
  )
}
