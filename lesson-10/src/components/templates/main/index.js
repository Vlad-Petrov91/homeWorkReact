import React from "react";


export function MainTemplate({ header, chats, children }) {
   return (
      <div>
         <div >{header}</div>
         <div className="block">
            <div>{chats}</div>
            <div >{children}</div>
         </div>
      </div>

   );
}