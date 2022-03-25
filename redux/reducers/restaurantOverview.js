export const GET_RESTAURANT_OVERVIEW="GET_RESTAURANT_OVERVIEW";
export const SET_RESTAURANT_OVERVIEW="SET_RESTAURANT_OVERVIEW";
export default (state={},action) =>{
    switch(action.type){
        case SET_RESTAURANT_OVERVIEW:
            return action.payload
        default:
            return state;
    }
}