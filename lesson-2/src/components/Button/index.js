import React from "react";

export const Button = ({ text, func }) => {

   return (
      <button className="button" onClick={func} > {text}</button>
   )
}