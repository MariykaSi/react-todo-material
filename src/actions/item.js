import {
  ADD_ITEM,
  DELETE_ITEM,
  CHANGE_SELECTED_ITEM,
  ADD_COMMENT
} from "../constants/actionTypes/items";

export const addItem = data => ({
  type: ADD_ITEM,
  payload: data
});

export const deleteItem = id => ({
  type: DELETE_ITEM,
  payload: id
});

export const changeSelectedItem = id => ({
  type: CHANGE_SELECTED_ITEM,
  payload: id
});

export const addComment = data => ({
  type: ADD_COMMENT,
  payload: data
});
