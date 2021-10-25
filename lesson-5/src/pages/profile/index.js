import React, { useCallback, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Button } from "@mui/material"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import '../../global.css';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch, connect } from "react-redux";
import { store } from "../../store/index";




export function Profile() {

   const [dummy, setDummy] = useState();
   const { showName, name } = store.getState().profile;
   const dispatch = store.dispatch;

   const setShowName = (dispatch) => {

      setDummy({});
   }

   return (
      <div>
         <h4>Profile</h4>
         <input
            type="checkbox"
            checked={showName}
            value={showName}
            onChange={setShowName}
         />
         <span>Show Name</span>
         {showName && <div>{name}</div>}
      </div>
   );
}




