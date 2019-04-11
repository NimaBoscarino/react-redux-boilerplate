export default function nameReducer(state = {
  name: 'Initial Name'
}, action) {
  console.log(action)
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