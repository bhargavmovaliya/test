import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Decrement, Increment } from '../Redux/action/counter.action';

function Counter(props) {

    const dispatch = useDispatch()

    const countVal = useSelector(state => state.counter)
    console.log(countVal);

    const handleInc = () => {
        dispatch(Increment())
    }

    const handleDec = () => {
        dispatch(Decrement())
    }

    return (
        <div>
            <button onClick={handleInc}>+</button>
            {countVal.count}
            <button onClick={handleDec}>-</button>
        </div>
    );
}

export default Counter;