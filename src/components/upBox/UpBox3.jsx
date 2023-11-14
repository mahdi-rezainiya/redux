import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterSlice } from '../../redux/counterSlice';

export default function UpBox3() {

    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    console.log(counter);

    return (
    <div className='bg-light p-4'>
        <h5>UpBox1</h5>

        <button onClick={() => dispatch(counterSlice.actions.increment())}>increment</button>

        <button onClick={() => dispatch(counterSlice.actions.decrement())}>decrement</button>

        <button onClick={() => dispatch(counterSlice.actions.incrementByAmount(4))}>incrementByAmount</button>

        <button onClick={() => dispatch(counterSlice.actions.decrementByAmount(4))}>decrementByAmount</button>

        <br />

        <p>counter : {counter}</p>
    </div>
    )
}
