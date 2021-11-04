import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme";


export function Header() {
   const context = useContext(ThemeContext);
   console.log(context)

   return (
      <header><h2>Header</h2></header>
   )

}