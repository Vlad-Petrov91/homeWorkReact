import React from "react";


export function Message({ message }) {
   const { value, user } = message;

   return (
      <div >
         <div>User: {user}</div>
         <div> Message: {value}</div>
         <div> Time: 11.00</div>
         <p></p>
      </div>
   );
}