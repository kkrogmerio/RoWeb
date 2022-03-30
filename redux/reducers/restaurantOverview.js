export const GET_RESTAURANT_OVERVIEW = 'GET_RESTAURANT_OVERVIEW';
export const SET_RESTAURANT_OVERVIEW = 'SET_RESTAURANT_OVERVIEW';
export const ZOOM_PHOTO_IN_GALLERY = 'ZOOM_PHOTO_IN_GALLERY';
export const UNZOOM_PHOTO_IN_GALLERY = 'UNZOOM_PHOTO_IN_GALLERY';
export default (state = {}, action) => {
  switch (action.type) {
    case SET_RESTAURANT_OVERVIEW:
      return action.payload;
    case ZOOM_PHOTO_IN_GALLERY:
      return {...state, zoomPhoto: true};
    case UNZOOM_PHOTO_IN_GALLERY:
      return {...state, zoomPhoto: false};
    default:
      return state;
  }
};
