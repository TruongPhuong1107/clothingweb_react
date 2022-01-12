import { Actiontypes } from '../constants/Actiontypes';
const initialState = {
  newproducts: [],
  productsByCate: [],
  activesidebar: false,
  productById: {},
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actiontypes.SET_NEW_PRODUCTS:
      return { ...state, newproducts: payload };
    case Actiontypes.SET_ACTIVE_SIDEBAR: {
      return { ...state, activesidebar: payload };
    }
    case Actiontypes.SET_PRODUCTS_BY_CATEGORY: {
      return { ...state, productsByCate: payload };
    }
    case Actiontypes.SET_PRODUCT_BY_ID: {
      return { ...state, productById: payload };
    }
    default:
      return state;
  }
};
