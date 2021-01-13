import { combineReducers } from "redux";
import { AppState } from './appstate';
import { peopleReducer } from './vehicle/vehicleReducer';
import { clientViewReducer } from './client/clientViewReducer';

export const rootReducer = combineReducers<AppState>({
  vehicle: peopleReducer,
  clientView: clientViewReducer
});
  