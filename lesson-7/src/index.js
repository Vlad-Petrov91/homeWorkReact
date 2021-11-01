import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './global.css';
import { CustomThemeProvider } from './context/theme'
import { ChatPage } from './pages/chatPage'
import { Profile } from './pages/profile';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/system';
import { PersistGate } from 'redux-persist/integration/react';

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



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/* <CustomThemeProvider themes={themes} initialTheme="light"> */}
          <Switch>
            <Route path="/chat">
              <ChatPage />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="*">
              <h1>404</h1>
              <Stack direction="row" spacing={3}>
                <Button size="large" variant="contained" href="/chat">go to Chat</Button>
                <Button size="large" variant="contained" href="/profile">go to Profile</Button>
              </Stack>

            </Route>
          </Switch>
          {/* </CustomThemeProvider> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById('root')
);


