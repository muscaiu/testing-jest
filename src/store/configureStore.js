import { createStore, applyMiddleware, compose } from 'redux';

import * as appActions from '../actions/app';
import rootReducer from '../reducers';

const actionCreators = {
  ...appActions
};





// export default function configureStore(initialState?: accountStateType) {
export default function configureStore(initialState) {
  // const persistedState = loadState()
  // const store = createStore(rootReducer, persistedState, enhancer);
  const store = createStore(rootReducer);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  }

  return store;
}
