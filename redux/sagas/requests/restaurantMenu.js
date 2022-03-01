
import Firebase from '../../../firebase/firebase';
export async function requestGetMenu(){
  
    return await Firebase.database.ref(`viewStore/${ Firebase.restaurantId }/menus/${Firebase.menuId}`).once('value')

    
    
 

}