 import { createSlice} from '@reduxjs/toolkit';


 export const slice = createSlice({
     name:'user',
     initialState: {
        name:'',
        email:''
     },
     reducers:{
         setEmail:(state,action)=>{
                 state.email = action.payload;
         },
         setNameUser:(state,action)=>{
             state.name = action.payload;
            
         }
     },
 });

 export const { setEmail,setNameUser } = slice.actions
    
export default slice.reducer;