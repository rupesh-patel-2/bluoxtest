import {
  SET_PROD_CATEGORIES,
  SET_PROD_CAT_SUB_CAT,
  SET_PROD_SUB_CATEGORIES,
  SET_PROD_ITEM_DETAIL,
} from "../actions/home";

const initialState = {
  prodCategories: [],
  prodCatSubCat: [],
  prodSubCategories: [],
  prodItemData: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_PROD_CATEGORIES:
      return { ...state, prodCategories: action.prodCategories };

    case SET_PROD_CAT_SUB_CAT:
      return { ...state, prodCatSubCat: action.prodCatSubCat };

    case SET_PROD_SUB_CATEGORIES:
      return { ...state, prodSubCategories: action.prodSubCategories };

    case SET_PROD_ITEM_DETAIL:
      return { ...state, prodItemData: action.prodItemData };

    default:
      return state;
  }
};

export default homeReducer;
