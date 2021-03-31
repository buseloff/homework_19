import ACTION_TYPES from "../actions/actionType";
const initialState = {
  delay: 1000,
  isFullScreen: true,
  isPlay: false,
};
export default function controlSlideReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.PLAY_HANDLER:
      return {
        ...state,
        isPlay: !state.isPlay,
      };
    case ACTION_TYPES.DELAY_HANDLER:
      const value = action.value;
      return {
        ...state,
        delay: value,
      };
    case ACTION_TYPES.FULL_SCREEN_MODE:
      return {
        ...state,
        isFullScreen: !state.isFullScreen,
      };
    default:
      return state;
  }
}
