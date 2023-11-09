import App from './App';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {store} from './redux/store';
import { Provider } from 'react-redux';



// const store = configureStore();
// store.getState();
// store.dispatch();
// store.subscribe()

// const addAction = {
  //   type: "ADD_CONTACT",
  //   payload : {
    //     name : "Mahdi"
    //   }
    // }
    
    // const removeContact = {
      //   type: "REMOVE_CONTACT",
      //   name : 'Mhd'
      // }


    // function addCounter (number){
    //     return{
    //       type : "ADD_COUNTER",
    //       payload : number
    //   }
    // }

    // function decreaseCounter (number){
    //     return{
    //       type : "DEC_COUNTER",
    //       payload : number
    //   }
    // }
      
    //   function counterApp(state , action){
    //   switch(action.type){
    //     case 'ADD_COUNTER' :
    //       return state += 1 ;
    //     case 'DEC_COUNTER' :
    //       return state -= 1 ;
    //     default : 
    //       return state
    //   }  
    //   }

// const test = combineReducers({
//   counterApp 
// })

// const UserContext = createContext();

// function ComponentParent(){
//   const [user , setUser] = useState('Mahdi');
//   return(
//     <UserContext.Provider value={user}>
//       <h1>Hello {user}</h1>
//     </UserContext.Provider>
//   )
// }

// const store = configureStore(reducer)

// const initialState = {
//   count : 0 
// }


//reducer
// function reducer (state = initialState , action){
//   switch(action.type){
//     case "INCEREMET" : 
//       return {count : state.count + action.num}
//     case "DECEREMET" :
//       return {count : state.count - action.num}
//     default :
//       return state
//   }
// }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);