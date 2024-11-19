import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeater.propTypes = {
    
};

function CounterFeater(props) {
    const dispatch = useDispatch()
    const count= useSelector(state=>state.count)
    const handleIncreaseClick=()=>{
        const action= increase()// action creator
        dispatch(action)
    }
    const handleDecreaseClick= ()=>{
        const action = decrease()
        dispatch(action)
    }
    return (
        <div>
          Couter:{count}
          <div>
            <button onClick={handleIncreaseClick}>Increase</button>
            <button onClick={handleDecreaseClick}>Decrease</button>
          </div>
        </div>
    );
}

export default CounterFeater;