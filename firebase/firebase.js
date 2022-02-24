import * as firebase from "firebase";
import firebaseConfig from './firebaseConfig';
 class Firebase{
    constructor(){
        
        this.database = firebase.initializeApp(firebaseConfig).database()
        
        this.configurate=this.configurate.bind(this);
    }
    configurate(restaurantId,branchId,menuId,menuConstraintId){
        this.restaurantId=restaurantId;
        this.branchId=branchId;
        this.menuId=menuId;
        this.menuConstraintId=menuConstraintId;
    }

}
export default Client=new Firebase();