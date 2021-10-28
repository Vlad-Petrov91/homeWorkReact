import React, { useCallback, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Button } from "@mui/material"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import '../../global.css';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from "react-redux";
import { toggleShoeProfile, profileSelector } from "../../store/profile/"





export function Profile() {



   const { firstName, lastName, isVisibleProfile } = useSelector(profileSelector)
   const dispatch = useDispatch()



   return (

      <div>
         <Button size="large" variant="contained" href="/chat">go to Chat</Button>
         <Box
            component="form"
            sx={{
               '& .MuiTextField-root': { m: 1, width: '25ch', },

               '& .MuiInputBase-input': {
                  color: "#e1f5fe",

               },
               '& input:valid + fieldset': {
                  borderColor: '#1976d2',
                  borderWidth: 2,
               },
               '& label': {
                  color: '#e1f5fe',
               },

            }}

            noValidate
            autoComplete="off"
         >

            <TextField

               id="outlined-login-input"
               label="Login"
               placeholder="Enter username"
            />

            <TextField
               id="outlined-password-input"
               label="Password"
               type="password"
               autoComplete="current-password"
            />


         </Box>

         <div>  <FormControlLabel control={<Checkbox defaultChecked />} label="Show profile" /></div>



         <div>

            <Button onClick={() => dispatch(toggleShoeProfile())} size="large" variant="contained" >Toggle Profile</Button>
            {isVisibleProfile && <><h2>firstName: {firstName}</h2>
               <h2>lastName: {lastName}</h2></>
            }
         </div>
      </div >
   )

}



