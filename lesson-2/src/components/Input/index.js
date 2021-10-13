import React from 'react';
import { useInput } from '../../hooks/useInput';

export const Input = ({ value, func }) => {

   return (
      <input className="inputMessage" placeholder="Enter message" value={value} onChange={func} type="text"></input>
   );
}