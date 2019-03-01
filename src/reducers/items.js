import {
  ADD_ITEM,
  DELETE_ITEM,
  CHANGE_SELECTED_ITEM,
  ADD_COMMENT
} from "../constants/actionTypes/items";

const initialState = {
  list: [],
  selectedItem: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const item = action.payload;
      return {
        ...state,
        list: [...state.list, ...item],
        selectedItem: item[0].id
      };
    }
    case DELETE_ITEM: {
      const { list } = state;
      const item = list.find(item => item.id === action.payload);
      const indexItem = list.indexOf(item);
      return {
        ...state,
        list: [...list.slice(0, indexItem), ...list.slice(indexItem + 1)]
      };
    }
    case CHANGE_SELECTED_ITEM: {
      return {
        ...state,
        selectedItem: action.payload
      };
    }
    case ADD_COMMENT: {
      const { list } = state;
      const item = list.find(item => item.id === state.selectedItem);
      const indexItem = list.indexOf(item);
      return {
        ...state,
        list: [
          ...list.slice(0, indexItem),
          { ...item, comments: [...item.comments, action.payload] },
          ...list.slice(indexItem + 1)
        ]
      };
    }
    default:
      return state;
  }
};
