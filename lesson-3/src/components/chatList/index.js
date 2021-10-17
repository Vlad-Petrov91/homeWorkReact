import React from "react";
import { ListItemButton, ListItem, ListItemText } from '@mui/material';


export const Chatlist = ({ chat }) => {




   return (
      <ListItem disablePadding>
         <ListItemButton component="a" href="#simple-list">
            <ListItemText primary={chat} />
         </ListItemButton>
      </ListItem>
   )

}