import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ACTION_TYPES from "../../../actions/actionType";
import Icon from "@mdi/react";
import {
  mdiPlay,
  mdiPause,
  mdiFullscreen,
  mdiFullscreenExit,
  mdiSkipNext,
  mdiSkipPrevious,
} from "@mdi/js";
import styles from "./ControlSlider.module.scss";

const ControlSlider = (props) => {
  let timeoutId = null;
  const dispatch = useDispatch();
  const playHandler = () => {
    dispatch({ type: ACTION_TYPES.PLAY_HANDLER });
  };

  const delayHandler = ({ target: { value } }) => {
    dispatch({ type: ACTION_TYPES.DELAY_HANDLER, value: value });
  };

  const fullscreenMode = () => {
    const { fullscreenMode } = props;
    dispatch({ type: ACTION_TYPES.FULL_SCREEN_MODE });
    fullscreenMode(isFullScreen);
  };

  useEffect(() => {
    const { next } = props;
    clearTimeout(timeoutId);
    timeoutId = null;
    if (isPlay) {
      timeoutId = setTimeout(next, delay);
    }
  });
  const isPlay = useSelector((state) => {
    const { controlSlideState } = state;
    return controlSlideState.isPlay;
  });
  const delay = useSelector((state) => {
    const { controlSlideState } = state;
    return controlSlideState.delay;
  });
  const isFullScreen = useSelector((state) => {
    const { controlSlideState } = state;
    return controlSlideState.isFullScreen;
  });

  return (
    <div>
      <div className={styles.inputWrapper}>
        <input
          type="range"
          value={delay}
          min={100}
          max={2000}
          onChange={delayHandler}
        />
        <div>{`Speed of slides = ${delay} ms`}</div>
      </div>
      <div className={styles.controlWrapper}>
        <Icon onClick={props.prev} path={mdiSkipPrevious} size={2} />
        <Icon
          onClick={playHandler}
          path={isPlay ? mdiPause : mdiPlay}
          size={2}
        />
        <Icon onClick={props.next} path={mdiSkipNext} size={2} />
        <Icon
          onClick={fullscreenMode}
          path={!isFullScreen ? mdiFullscreenExit : mdiFullscreen}
          size={2}
        />
      </div>
    </div>
  );
};

export default connect()(ControlSlider);
