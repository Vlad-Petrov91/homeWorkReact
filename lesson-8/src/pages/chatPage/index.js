import React, { useEffect } from "react"
import { MessageList } from '../../components/messageList';
import { Header } from '../../components/header';
import { ChatList } from '../../components/chatList';
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import '../../global.css';
import { Profile } from "../profile";
import { Button } from "@mui/material"
import { MainTemplate } from "../../components/templates/"
import { MessageProvider } from "../../components/messageProvider";


export function ChatPage() {
   const { push } = useHistory();

   useEffect(() => {
      const listenExistChat = ({ code }) => {
         if (code === "Escape") {
            push("/chat");
         }
      };
      document.addEventListener("keydown", listenExistChat)

      return () => {
         document.removeEventListener("keydown", listenExistChat)
      }
   }, [push]);



   return (

      <BrowserRouter>

         <Switch>

            <Route path={["/chat/:roomId", "/chat"]}>

               <MessageProvider>
                  {([state, actions]) => <>
                     <MainTemplate
                        // header={<Header />}
                        chats={<ChatList {...state}
                           createConversation={actions.createConversation} />}>
                        <Route exact path="/chat/:roomId">
                           <MessageList {...state} sendMessage={actions.sendMessage} handleChangeValue={actions.handleChangeValue} />

                        </Route>
                        <Route path="/profile">

                           <Profile />
                        </Route>
                     </MainTemplate></>}
               </MessageProvider>
               <Button size="large" variant="contained" href="/profile">go to Profile</Button>
               <Button size="large" variant="contained" href="/gists">go to Gists</Button>
               <Route exact path="/chat">

                  <h2>Выберите диалог</h2>
               </Route>

            </Route>
         </Switch>
      </BrowserRouter >
   )
}

