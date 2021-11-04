import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import thunk from "redux-thunk";
import {
   logger,
   //thunk, 
   botSendMessage,
   timeScheduler
} from "./midlewares";


import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { gistsReducer } from "./gists";
import { getGistsApi, searchGistsByUserNameApi } from "../api";


const persistConfig = {
   key: "root",
   storage,
   blacklist: ['messages'],
   whitelist: ['profile', 'conversations']
};



const persistreducer = persistReducer(persistConfig, combineReducers({
   profile: profileReducer,
   conversations: conversationsReducer,
   messages: messagesReducer,
   gists: gistsReducer,
}))

export const store = createStore(
   persistreducer,
   compose(
      applyMiddleware(
         timeScheduler,

         thunk.withExtraArgument({ getGistsApi, searchGistsByUserNameApi }),
         logger,
         botSendMessage
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   )
);

export const persistor = persistStore(store);