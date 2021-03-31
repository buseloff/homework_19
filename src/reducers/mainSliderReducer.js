import ACTION_TYPES from "../actions/actionType";
const initialState = {
  currentIndex: 0,
};
export default function controlSlideReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.NEXT_INDEX:
      return {
        ...state,
        currentIndex: (state.currentIndex + 1) % action.length,
      };
    case ACTION_TYPES.PREV_INDEX:
      return {
        ...state,
        currentIndex: (state.currentIndex - 1 + action.length) % action.length,
      };

    default:
      return state;
  }
}
