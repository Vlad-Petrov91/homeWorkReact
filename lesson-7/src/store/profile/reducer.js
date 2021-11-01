import { SHOW_PROFILE } from './types'

const initialState = {
   firstName: "Vlad",
   lastName: "Petrov",
   age: 30,
   isVisibleProfile: true,
};

export const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case SHOW_PROFILE:
         return {
            ...state,
            isVisibleProfile: !state.isVisibleProfile,
         };
      default:
         return state;
   }
};
