import React, { useMemo, useState } from "react";


import { useParams, BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

export function MessageProvider(children) {
   const { roomId } = useParams()

   const [message, setMessage] = useState({
      room1: [],
      room2: [],
      room3: [],
   })

   const state = useMemo(() => {
      return {
         message: message[roomId] ?? []
      }
   }, [roomId, message]);

   const actions = useMemo(() => {
      return {
         setMessage
      }
   }, []);

   return children([]);
}