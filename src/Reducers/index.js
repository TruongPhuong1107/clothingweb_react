import { combineReducers } from 'redux';
import { categoryReducer } from './categoryReducer';
import { productReducer } from './productReducer';
const rootReducer = combineReducers({
  products: productReducer,
  categoryItems: categoryReducer,
});
export default rootReducer;
