import { createStore } from 'redux';

import onlyReducer from './reducers';

export default function configureStore() {
  const store = createStore(
    onlyReducer,
    // the following line is just for making the Redux dev tools extension work
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store
}