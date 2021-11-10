import React from "react";
import { memo } from "react";
import { Box, Card, CardContent, Typography } from '@mui/material';
import { format } from 'date-fns'
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { messagesSelector } from "../../../store/messages";
import { deleteMessage } from "../../../store/messages";

export const Message = memo(({ message }) => {
   const { value, user, id } = message;



   const { roomId } = useParams();



   const messages = useSelector(messagesSelector(roomId));

   const dispatch = useDispatch();




   const removeMessage = () => {

      dispatch(deleteMessage({ id }, roomId))
      console.log(id)
   }





   let messagePosition
   (user === "Vlad") ? messagePosition = "auto" : messagePosition = "none"

   const bull = (
      <Box
         component="span"
         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
      >
         •
      </Box>
   );

   return (
      <Box sx={{
         margin: 2
      }}
      >
         <Card sx={{
            width: 320,
            minHeight: 80,
            backgroundColor: "rgb(19, 47, 76)",
            marginLeft: `${messagePosition}`
         }}>
            <CardContent sx={
               { color: "#e1f5fe" }} >
               <Typography sx={{ fontSize: 11 }}
                  gutterBottom>
                  11.00
               </Typography>
               <Typography sx={{ fontSize: 11 }}
                  gutterBottom>
                  {format(new Date(), 'dd-MM-yyyy')}
               </Typography>
               <Typography sx={{ fontSize: 15 }} variant="body2" >
                  user:  {user}
               </Typography>
               <button id={id} onClick={removeMessage}>del</button>
               <Typography sx={{ fontSize: 20 }} variant="body1">
                  {bull} {value}
               </Typography>
            </CardContent>
         </Card >
      </Box >
   );
});