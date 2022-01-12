import { Actiontypes } from '../constants/Actiontypes';
export const setAllCategory = (items) => {
  return {
    type: Actiontypes.SET_ALL_CATEGORY,
    payload: items,
  };
};
