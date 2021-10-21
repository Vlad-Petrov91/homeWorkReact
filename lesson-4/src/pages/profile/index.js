import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

export function Profile() {
   return (
      <div>
         <input placeholder="Введите логин"></input>
         <Link to="/chat">go to Chat</Link>

         < BrowserRouter >
            <Switch>
               <Route exact path="/chat">
                  <h2>Выберите диалог</h2>
               </Route>
            </Switch>
         </BrowserRouter ></div>)

}