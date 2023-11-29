const { createSlice } = require("@reduxjs/toolkit");


export const userSlice = createSlice({
    name : "user" ,
    initialState : {
        name : "ali",
        children : ['mari' , 'mamad']
    },
    // reducers : {
    //     addChildren : (state , action) => {
    //         if(state.children){
    //         }
    //         else{
    //             state.children = [...state.children , ...action.payload]
    //         }
    //     }
    // }

    reducers: {
        addChildren: (state , action) => {
            if (state.children) {
                const newChildren = action.payload.filter(child => !state.children.includes(child));
                state.children = [...state.children, ...newChildren];    
            } 
            else {
                state.children = action.payload;
            }
        }
    }
})