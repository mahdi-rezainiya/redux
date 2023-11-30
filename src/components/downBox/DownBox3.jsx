import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userSlice } from '../../redux/userSlice';

export default function DownBox3() {
    const counter = useSelector(state => state.counter.value);
    const userChildren = useSelector((state) => state.user.children)
    const dispatch = useDispatch()

    return (
    <div className='bg-light p-4'>
        <h5>DownBox</h5>

        <button  onClick={() => {dispatch(userSlice.actions.addChildren(["senko" , "korom"]))}}>addChildren</button>

        {userChildren.map((child) => (
            <h3 key={child}>{child}</h3>
        ))}

        <br />
        <p>counter : {counter}</p>
    </div>
    )
}