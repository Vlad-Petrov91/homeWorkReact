import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './global.css';
import { CustomThemeProvider } from './context/theme'
import { ChatPage } from './pages/chatPage'
import { Profile } from './pages/profile';
import { SignUpPage } from "./pages/sign-up"
import { LoginPage } from "./pages/login"
import { firebaseApp } from './api/fireBase';
import { store, persistor } from './store';
import { sessionSelector, onAuthStateChanged } from './store/session';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/system';
import { PersistGate } from 'redux-persist/integration/react';
import { Gists } from './pages/gist';
import { Header } from './components/header';
import { SettingsAccessibilityOutlined } from '@mui/icons-material';
import { PrivateRoute, PublicRoute } from "./components/route"
import { getMessageApi, sendMessageApi } from "./api/messages"
import { getMessagesFB } from './store/messages';

const themes = {
  light: createTheme({
    theme: {
      color: "white",
    },
  }),

  dark: createTheme({
    theme: {
      color: "black",
    },
  }),
}




const App = () => {
  const session = useSelector(sessionSelector);
  const dispatch = useDispatch();
  // const [session, setSession] = useState(null)


  // useEffect(() => {
  //   firebaseApp.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       setSession(user);
  //     } else {
  //       setSession(null)
  //     }
  //   })
  // }, [])

  useEffect(() => {
    dispatch(onAuthStateChanged())
    // sendMessageApi({ value: "Test", user: "Vlad" }, "room1").then(() => {
    //   getMessagesApi().then(data => {
    //     console.log("data", data);
    //   })
    // });

  }, [dispatch]);
  useEffect(() => {
    dispatch(getMessagesFB());
  }, [dispatch]);


  const isAuth = !!session?.email;

  return (
    <>
      <Header session={session} />
      < Switch >
        <PrivateRoute path="/chat" isAuth={isAuth}>
          <ChatPage />
        </PrivateRoute>
        <PrivateRoute path="/profile" isAuth={isAuth}>
          <Profile />
        </PrivateRoute>
        <PublicRoute path="/sign-up" isAuth={isAuth}>
          <SignUpPage />
        </PublicRoute>
        <PublicRoute path="/login" isAuth={isAuth} to="/chat">
          <LoginPage />
        </PublicRoute>
        <PrivateRoute path="/gists" isAuth={isAuth} to="/chat">
          <Gists />
        </PrivateRoute>
        <Route path="*">
          <h1>404</h1>
          <Stack direction="row" spacing={3}>

            <Button size="large" variant="contained" href="/login">Login</Button>
            <Button size="large" variant="contained" href="/sign-up">Sign Up</Button>
            <Button size="large" variant="contained" href="/chat">go to Chat</Button>

          </Stack>


        </Route>
      </Switch >
    </>
  );
};




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <CustomThemeProvider themes={themes} initialTheme="light"> */}
          <App />
          {/* </CustomThemeProvider> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);


