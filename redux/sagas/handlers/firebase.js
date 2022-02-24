import Firebase from '../../../firebase/firebase';
import {dummyRestaurantFirebase} from '../../../firebase/firebaseConfig'
export function* handleFirebaseData(){
    Firebase.configurate(dummyRestaurantFirebase.restaurantId,dummyRestaurantFirebase.branchId,dummyRestaurantFirebase.menuId,dummyRestaurantFirebase.menuConstraintId);
    
}