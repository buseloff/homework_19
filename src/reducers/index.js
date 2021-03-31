import slideReducer from "./slideReducer";
import controlSlideReducer from "./controlSlideReducer";
import mainSlideReducer from "./mainSliderReducer";
import { combineReducers } from "redux";
export default combineReducers({
  slideState: slideReducer,
  controlSlideState: controlSlideReducer,
  mainSliderState: mainSlideReducer,
});
