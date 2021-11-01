import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
// import thunk from "redux-thunk";
import { logger, thunk, botSendMessage, timeScheduler } from "./midlewares";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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
}))

export const store = createStore(
   persistreducer,
   compose(applyMiddleware(thunk, logger, botSendMessage, timeScheduler), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export const persistor = persistStore(store);