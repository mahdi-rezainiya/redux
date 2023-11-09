import React from 'react'
import { useSelector } from 'react-redux'

export default function DownBox3() {

    const counter = useSelector(state => state.counter.value);

    
    return (
    <div className='bg-light p-4'>
        <h5>DownBox</h5>
        <p>counter : {counter}</p>
    </div>
    )
}
