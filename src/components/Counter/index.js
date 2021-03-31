import React from 'react';
import { connect } from 'react-redux';
import ACTION_TYPES from '../../actions/actionType';

const Counter = (props) => {
  return (
    <>
      <h1>Value={props.value}</h1>
      <h2>Step={props.step}</h2>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.increment}>+</button>
    </>
  );
};

const mapStateToProps = (state) => {
  const { counterState } = state;
  return counterState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: ACTION_TYPES.COUNTER_INCREMENT }),
    decrement: () => dispatch({ type: ACTION_TYPES.COUNTER_DECREMENT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
/*
const WithReduxStore = connect(mapStateToProps);
const CounterConectToReduxStore = WithReduxStore(Counter);
export default CounterConectToReduxStore;
*/
