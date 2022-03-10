import {takeLatest} from 'redux-saga/effects';
import { GET_RESTAURANT_MENU,GET_RESTAURANT_ORDER,CONFIGURE_FIREBASE } from '../restaurants';
import { handleGetMenu} from './handlers/restaurantMenu';
import { handleGetOrder} from './handlers/restaurantOrder';
import {configureFirebase} from './handlers/firebase'
export function* watcherSaga(){
    yield takeLatest(GET_RESTAURANT_MENU,handleGetMenu);
    yield takeLatest(GET_RESTAURANT_ORDER,handleGetOrder);

    yield takeLatest(CONFIGURE_FIREBASE,configureFirebase);
   

}