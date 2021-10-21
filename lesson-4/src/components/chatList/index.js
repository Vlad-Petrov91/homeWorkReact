import React, { useState, useEffect } from "react";
import { ListItemButton, List, ListItem, ListItemText } from '@mui/material';
import { useParams, BrowserRouter, Route, Switch, useHistory } from "react-router-dom";


// 
export const ChatList = ({ chat }) => {
   const [chatList] = useState([{ name: "chat", id: "1" }, { name: "chat2", id: "2" }, { name: "chat3", id: "3" }, { name: "chat4", id: "4" },])
   const [selectedIndex, setSelectedIndex] = useState(0);
   const params = useParams()
   console.log(params, chat)

   return (

      <div>

         {chatList.map((chat) =>

            <List key={chat.id}>  < ListItem disablePadding>
               <ListItemButton
                  // handleListItemClick={() => setSelectedIndex(index)} 
                  selected={chat.name === params.roomId}
                  component="a" href={`/chat/${chat.name}`} >
                  <ListItemText primary={chat.name} />
               </ListItemButton>
            </ListItem >
            </List>

         )

         }




      </div >
   )

}




