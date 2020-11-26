import * as Helper from "../../utils/Helper";
import Module from "../../module/index";
import ApiEndPoints from '../../config/ApiEndPoints';
import { Constants } from "../../config/Constant";

export const SET_PROD_CATEGORIES = "SET_PROD_CATEGORIES";
export const SET_PROD_CAT_SUB_CAT = "SET_PROD_CAT_SUB_CAT";
export const SET_PROD_SUB_CATEGORIES = "SET_PROD_SUB_CATEGORIES";
export const SET_PROD_ITEM_DETAIL = "SET_PROD_ITEM_DETAIL";

export const getProdCategories = () => {
    return async (dispatch) => {
        Module.CustomActivityIndicator.showLoader(true);
        try {
            const response = await fetch(ApiEndPoints.API_PROD_CATEGORIES, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            Module.CustomActivityIndicator.showLoader(false);
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const resData = await response.json();
            console.log("getProdCategories ==> " + JSON.stringify(resData));
            dispatch({ type: SET_PROD_CATEGORIES, prodCategories: resData.data.categoryList });
            return resData;
        } catch (err) {
            throw err;
        }
    };
};

export const getProdCatSubCat = (prodId) => {
    return async (dispatch) => {
        Module.CustomActivityIndicator.showLoader(true);
        try {
            const response = await fetch(ApiEndPoints.API_PROD_CAT_SUB_CAT + prodId, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            Module.CustomActivityIndicator.showLoader(false);
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const resData = await response.json();
            console.log("getProdCatSubCat ==> " + JSON.stringify(resData));
            dispatch({ type: SET_PROD_CAT_SUB_CAT, prodCatSubCat: resData.data.subcategoriesList });
            return resData;
        } catch (err) {
            throw err;
        }
    };
};

export const getProdSubCat = (prodId) => {
    return async (dispatch) => {
        Module.CustomActivityIndicator.showLoader(true);
        try {
            const response = await fetch(ApiEndPoints.API_PROD_SUB_CAT + prodId, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            Module.CustomActivityIndicator.showLoader(false);
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const resData = await response.json();
            console.log("getProdSubCat ==> " + JSON.stringify(resData));
            dispatch({ type: SET_PROD_SUB_CATEGORIES, prodSubCategories: resData.data.productList });
            return resData;
        } catch (err) {
            throw err;
        }
    };
};

export const getProductItemDetail = (prodItemID) => {
    return async (dispatch) => {
        Module.CustomActivityIndicator.showLoader(true);
        try {
            const response = await fetch(ApiEndPoints.API_PRODUCT_ITEM_DETAIL + prodItemID, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            Module.CustomActivityIndicator.showLoader(false);
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }
            const resData = await response.json();
            console.log("getProductItemDetail ==> " + JSON.stringify(resData));
            dispatch({ type: SET_PROD_ITEM_DETAIL, prodItemData: resData.data.product });
            return resData;
        } catch (err) {
            throw err;
        }
    };
};

