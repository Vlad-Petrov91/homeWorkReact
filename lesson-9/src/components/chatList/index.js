import React from "react";
import { Button, ListItemButton, List, ListItem, ListItemText, Box } from '@mui/material';
import { Link, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { conversationsSelector, createConversation } from "../../store/conversations";


// 
export const ChatList = () => {
   // const [chatList] = useState(["chat1", "chat2", "chat3"])

   const conversations = useSelector(conversationsSelector);
   const params = useParams();
   const dispatch = useDispatch();

   const createConversationWithName = () => {
      const conversationName = prompt("Введите название")
      if (conversationName) {
         dispatch(createConversation(conversationName))
      }
   }
   return (

      <Box sx={{ width: 200, maxWidth: 360, bgcolor: "rgb(0, 30, 60)" }}>
         <Button onClick={createConversationWithName}
            size="large" variant="contained">create</Button>
         {
            conversations.map((chat, index) =>
               <List key={index} component="nav" aria-label="main mailbox folders" >
                  <Link key={nanoid()} color="white" to={`/chat/${chat.title}`}>
                     < ListItem >
                        <ListItemButton sx={{
                           color: "#e1f5fe",

                        }}
                           // handleListItemClick={() => setSelectedIndex(index)} 
                           selected={chat.title === params.roomId}
                        >
                           <ListItemText primary={chat.title} />
                        </ListItemButton>
                     </ListItem ></Link>
               </List>
            )
         }
      </Box >




   )

}




