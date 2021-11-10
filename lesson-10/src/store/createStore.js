import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import { sessionReducer } from "./session"
import thunk from "redux-thunk";
import {
   logger,
   //thunk, 
   botSendMessage,
   timeScheduler
} from "./midlewares";
import firebase from "firebase"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { gistsReducer } from "./gists";
import { getGistsApi, searchGistsByUserNameApi, getMessagesApi, sendMessageApi, getConversationsApi } from "../api";


const persistConfig = {
   key: "root",
   storage,
   blacklist: ['messages'],
   whitelist: ['profile', 'conversations']
};

export const reducer = combineReducers({
   profile: profileReducer,
   conversations: conversationsReducer,
   messages: messagesReducer,
   gists: gistsReducer,
   session: sessionReducer,
})



const persistreducer = persistReducer(persistConfig, reducer)

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = createStore(
   persistreducer,
   composeEnhancers(
      applyMiddleware(
         timeScheduler,
         thunk.withExtraArgument({ getGistsApi, searchGistsByUserNameApi, getMessagesApi, sendMessageApi, getConversationsApi, }),
         logger,
         botSendMessage
      )
   )
);




export const persistor = persistStore(store);