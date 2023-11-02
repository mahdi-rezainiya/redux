import React , {useState , createContext , useContext} from 'react';
import { ReactDOM , render } from 'react;'
import {createStore} from 'redux';

const UserContext = createContext();

function ComponentParent() {
    const [user , setUser] = useState("Mahdi");
    return (
        <UserContext.Provider value={user}>
            <h1>Hello {user}</h1>
        </UserContext.Provider>
    ) 
}

render(<ComponentParent/> , document.getElementById('root'))