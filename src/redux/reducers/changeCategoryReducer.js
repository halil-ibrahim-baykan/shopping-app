import * as actionTypes from "../actions/actionTypes";
import initalState from "./initalState";

export default function changeCategoryReducer(
  state = initalState.currentCategory,
  action
) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return action.payload;

    default:
      return state;
  }
}
