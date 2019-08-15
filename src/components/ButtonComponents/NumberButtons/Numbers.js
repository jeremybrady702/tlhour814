import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

//import any components needed

//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [oneThree] = useState(numbers.slice(0, 3));
  const [fourSix] = useState(numbers.slice(3, 6));
  const [sevenNine] = useState(numbers.slice(6, 9));
  const [zeroRow] = useState(numbers.slice(9));

  return (
    <div>
      <div className="row oneThree">
        {oneThree.map((number, index) => (
          <NumberButton key={index} number={number} />
        ))}
      </div>
      <div className="row fourSix">
        {fourSix.map((number, index) => (
          <NumberButton key={index} number={number} />
        ))}
      </div>
      <div className="row sevenNine">
        {sevenNine.map((number, index) => (
          <NumberButton key={index} number={number} />
        ))}
      </div>
      <div className="row zeroRow">
        {zeroRow.map((number, index) =>
          index === 0 ? (
            <NumberButton key={index} number={number} className={"zero"} />
          ) : (
            <NumberButton key={index} number={number} className={"reg"} />
          )
        )}
      </div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;