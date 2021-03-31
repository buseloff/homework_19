import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ACTION_TYPES from "../../actions/actionType";
import Slide from "./Slide";
import ControlSlider from "./ControlSlider";

const Slider = (props) => {
  const { widthInitial, heightInitial } = props;
  const [width, setWidth] = useState(widthInitial);
  const [height, setHeight] = useState(heightInitial);
  const { slides } = props;
  const dispatch = useDispatch();
  const nextIndex = () => {
    dispatch({ type: ACTION_TYPES.NEXT_INDEX, length: slides.length });
  };

  const prevIndex = () => {
    dispatch({ type: ACTION_TYPES.PREV_INDEX, length: slides.length });
  };

  const fullscreenMode = (isFullScreen) => {
    const { widthInitial, heightInitial } = props;
    if (isFullScreen) {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    if (!isFullScreen) {
      setWidth(widthInitial);
      setHeight(heightInitial);
    }
  };

  const currentIndex = useSelector((state) => {
    const { mainSliderState } = state;
    return mainSliderState.currentIndex;
  });
  
  return (
    <div>
      <Slide
        currentSlide={props.slides[currentIndex]}
        width={width}
        height={height}
      />
      <ControlSlider
        next={nextIndex}
        prev={prevIndex}
        fullscreenMode={fullscreenMode}
      />
    </div>
  );
};

export default connect()(Slider);
