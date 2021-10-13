import { useState } from "react";
import React from "react";
import App from "../../App";

export const useInput = (initialValue) => {
   const [value, setValue] = useState(initialValue);

   const onChange = messageText => {
      setValue(messageText.target.value)
   }

   return (
      value,
      { onChange }
   )

}

