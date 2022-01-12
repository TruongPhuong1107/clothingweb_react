import { Actiontypes } from '../constants/Actiontypes';
const initialState = {
  cateItems: [],
};
export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actiontypes.SET_ALL_CATEGORY:
      return { ...state, cateItems: payload };
    default:
      return state;
  }
};
