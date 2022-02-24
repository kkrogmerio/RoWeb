import {takeLatest} from 'redux-saga/effects';
import { GET_RESTAURANTS_MENU,GET_RESTAURANTS_ORDER,CONFIGURE_FIREBASE } from '../restaurants';
import { handleGetMenu} from './handlers/restaurantsMenu';
import { handleGetOrder} from './handlers/restaurantsOrder';
import {handleFirebaseData} from './handlers/firebase'
export function* watcherSaga(){
    yield takeLatest(GET_RESTAURANTS_MENU,handleGetMenu);
    yield takeLatest(GET_RESTAURANTS_ORDER,handleGetOrder);
    yield takeLatest(CONFIGURE_FIREBASE,handleFirebaseData);
   

}