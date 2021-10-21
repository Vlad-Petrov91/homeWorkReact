import React, { useEffect } from "react"
import { MessageList } from '../../components/messageList';
import { Header } from '../../components/header';
import { ChatList } from '../../components/chatList';
import { Link, BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import '../../global.css';
import { Profile } from "../profile";
import { MessageProvider } from "../../components/messageProvider";

export function ChatPage() {
   const { push } = useHistory();

   useEffect(() => {
      const listenExistchat = ({ code }) => {
         if (code === "Escape") {
            push("/chat")
         }
      }

      document.addEventListener("keydown", listenExistchat)

      return () => {
         document.removeEventListener("keydown", listenExistchat)
      }
   }, [push])


   return (

      <BrowserRouter>
         <Switch>
            <Route exact path={["/chat/:roomId", "/chat"]}>
               <Header />
               <ChatList />
               <Link to="/profile">go to Profile</Link>
               <Route exact path="/chat/:roomId">
                  <MessageList />
               </Route>
               <Route path="/profile">
                  <Profile />
                  <Route exact path="/chat">
                     <h2>Выберите диалог</h2>
                  </Route>
               </Route>
            </Route>
         </Switch>
      </BrowserRouter >
   )



}