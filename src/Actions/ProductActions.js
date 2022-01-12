import { Actiontypes } from '../constants/Actiontypes';
export const setNewProducts = (products) => {
  return {
    type: Actiontypes.SET_NEW_PRODUCTS,
    payload: products,
  };
};
export const setAllProducts = (products) => {
  return {
    type: Actiontypes.SET_ALL_PRODUCTS,
    payload: products,
  };
};
export const setActiveSidebar = (state) => {
  return {
    type: Actiontypes.SET_ACTIVE_SIDEBAR,
    payload: state,
  };
};
export const setProductsByCateId = (products) => {
  return {
    type: Actiontypes.SET_PRODUCTS_BY_CATEGORY,
    payload: products,
  };
};
export const setProducById = (product) => {
  return {
    type: Actiontypes.SET_PRODUCT_BY_ID,
    payload: product,
  };
};
