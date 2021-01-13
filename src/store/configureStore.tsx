import { createStore, applyMiddleware, Store, } from "redux";
import thunk from "redux-thunk";

import { AppState } from './appstate';
import { rootReducer } from './rootreducer';

function configureStore(): Store<AppState> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
  }
  
export const store = configureStore();

// export default store;
  