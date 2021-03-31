import ACTION_TYPES from "../actions/actionType";

const initialState = {
  img: new Image(),
  isLoad: true,
};

export default function slideReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.LOAD_SLIDE:
      const {
        currentSlide: { src },
      } = action.props;
      let cloneState = { ...state };
      if (src !== action.props.currentSlide && state.isLoad) {
        cloneState.img.src = src;
      }
      return {
        ...state,
        img: cloneState.img,
      };

    default:
      return state;
  }
}
