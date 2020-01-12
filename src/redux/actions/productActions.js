import * as actionTypes from "./actionTypes";

export function getProductsSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories }; // result = categories
}

export function getProducts() {
  return function(dispatch) {
    let url = "http://localhost:4400/categories";

    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getProductsSuccess(result)));
  };
}
