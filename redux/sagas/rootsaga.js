import {takeLatest} from 'redux-saga/effects';
import { GET_RESTAURANT_MENU,GET_RESTAURANTS_ORDER,CONFIGURE_FIREBASE } from '../restaurants';
import { handleGetMenu} from './handlers/restaurantMenu';
import { handleGetOrder} from './handlers/restaurantsOrder';
import {configureFirebase} from './handlers/firebase'
export function* watcherSaga(){
    yield takeLatest(GET_RESTAURANT_MENU,handleGetMenu);
    yield takeLatest(GET_RESTAURANTS_ORDER,handleGetOrder);

    yield takeLatest(CONFIGURE_FIREBASE,configureFirebase);
   

}