import React from "react";


const NumberButton = ({ number, className }) => {
  console.log(number);
  if (className === "zero") {
    return (
      <>
        <button className="button zero">{number}</button>
      </>
    );
  } else {
    return (
      <>
        <button className="button number">{number}</button>
      </>
    );
  }
};

export default NumberButton;
