import React, { useState } from "react";
import Output from "./Output";

function Greeting(props) {
  const [changedText, setChangedText] = useState(false)

  const changeTextHandler = () => {
    setChangedText(true)
  }

  return (
    <div>
      <h2 id="greeting">Hello World!</h2>
      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
}

export default Greeting;
