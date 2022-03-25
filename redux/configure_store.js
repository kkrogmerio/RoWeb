import { combineReducers,createStore,applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import restaurantMenuReducer from "./reducers/restaurantMenu";
import restaurantOverviewReducer from "./reducers/restaurantOverview";
import {watcherSaga} from './sagas/rootsaga';
const reducer=combineReducers({restaurants:restaurantMenuReducer,
restaurantOverview:restaurantOverviewReducer});
const sagaMiddleware=createSagaMiddleware();
const middleware=[sagaMiddleware];
const store=createStore(reducer,{},applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);
export default store;