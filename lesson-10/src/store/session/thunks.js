import { firebaseApp } from "../../api/fireBase";
import { getSessionSuccess, getSessionError } from "./actions";

export const onAuthStateChanged = () => (dispatch) => {
   firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
         dispatch(getSessionSuccess(user));
      } else {
         dispatch(getSessionError());
      }
   });
};