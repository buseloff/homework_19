import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ACTION_TYPES from "../../../actions/actionType";
import styles from "./Slide.module.scss";

const Slide = (props) => {
  const dispatch = useDispatch();
  dispatch({ type: ACTION_TYPES.LOAD_SLIDE, props: props });
  const isLoad = useSelector((state) => {
    const { slideState } = state;
    return slideState.isLoad;
  });

  return (
    <>
      {isLoad && (
        <figure
          title={props.currentSlide.title}
          style={{ height: props.height, width: props.width }}
          className={styles.imgWrapper}
        >
          <img
            src={props.currentSlide.src}
            className={styles.slideImg}
            alt="Slide_photo"
          />
          <figcaption className={styles.figCaption}>
            <h2>{props.currentSlide.title}</h2>
            <p>{props.currentSlide.description}</p>
          </figcaption>
        </figure>
      )}
    </>
  );
};

export default connect()(Slide);
