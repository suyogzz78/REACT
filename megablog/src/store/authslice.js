import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    status: false,
    userdata: null,

}; 

export const authSlice = createSlice({
        name:"auth",
        initialState,
        reducers:{ 
            login: (state, action) => {
                state.status = true;
                state.userdata = action.payload;
            },
            logout:(state)=>{
                state.status = false;//set status to false on logout
                state.userdata = null;//clear user data on logout
            }
        }
});
export const {login,logout} = authSlice.actions;
export default authSlice.reducer;