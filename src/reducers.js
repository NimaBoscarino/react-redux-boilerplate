import { combineReducers } from "../../../Library/Caches/typescript/3.4/node_modules/redux";

function nameReducer(state = {
  name: 'Initial Name'
}, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case 'NAME_CHANGE':
      return {
        name: action.name
      };
    default:
      return state;
  }
}

function colorReducer(state = {
  color: 'red'
}, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case 'COLOR_CHANGE':
      return {
        color: action.color
      };
    default:
      return state;
  }
}

export default combineReducers({
  nameData: nameReducer,
  colorData: colorReducer
})