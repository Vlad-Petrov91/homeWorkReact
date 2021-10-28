import React from "react";
import { memo } from "react";
import { Box, Card, CardContent, Typography } from '@mui/material';




export const Message = memo(({ message }) => {
   const { value, user } = message;


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
                  time 11.00
               </Typography>
               <Typography sx={{ fontSize: 15 }} variant="body2" >
                  user:  {user}
               </Typography>

               <Typography sx={{ fontSize: 20 }} variant="body1">
                  {bull} {value}

               </Typography>
            </CardContent>

         </Card >
      </Box >
   );

});