import * as firebase from "firebase";
import firebaseConfig,{overviewDatabaseUrl} from './firebaseConfig';
import store from "../redux/configure_store";
import { SET_RESTAURANT_OVERVIEW } from "../redux/reducers/restaurantOverview";
import { SET_RESTAURANT_MENU } from "../redux/reducers/restaurantMenu";
 class Firebase{
    constructor(){
        
        this.initializedFirebase = firebase.initializeApp(firebaseConfig);
        this.menuDatabase=this.initializedFirebase.database();
        this.overviewDatabase=this.initializedFirebase.database(overviewDatabaseUrl);
        this.configurate=this.configurate.bind(this);
    }
    subscribeToFirebase(){
            // this.menuDatabase.ref().on('value',snapshot=>store.dispatch({type:SET_RESTAURANT_MENU,payload:snapshot}))
            // this.overviewDatabase.ref().on('value',snapshot=>store.dispatch({type:SET_RESTAURANT_OVERVIEW,payload:snapshot}))
        }
    configurate(restaurantId,branchId,menuId,menuConstraintId){
        this.restaurantId=restaurantId;
        this.branchId=branchId;
        this.menuId=menuId;
        this.menuConstraintId=menuConstraintId;
        this.subscribeToFirebase();
    }

}
export default Client=new Firebase();