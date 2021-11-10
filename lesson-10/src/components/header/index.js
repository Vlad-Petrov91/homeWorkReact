import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import { firebaseApp } from "../../api/fireBase";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";


const exist = () => {
   firebaseApp.auth().signOut()
}

export function Header({ session }) {
   const context = useContext(ThemeContext);
   const isAuth = !!session?.email;

   return (
      <header>
         <h2>Header</h2>
         <h2>{session?.email ?? "user"}</h2>
         {!isAuth && (<>
            <Link to="/login">Login</Link>
            <Link to="/sign-up">Sign up</Link>

         </>)}



         {isAuth && (<>
            <Link to="/chat">Chat</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/gists">Gists</Link>
            <button onClick={exist}>exit</button>
         </>)}


      </header>
   )

}