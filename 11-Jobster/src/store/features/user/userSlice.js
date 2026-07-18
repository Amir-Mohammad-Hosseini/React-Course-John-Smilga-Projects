import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null
}

const initialState = {
    user : getUserFromLocalStorage()
}

const userSlice = createSlice({
    name : "user" , 
    initialState ,
    reducers : {
        loginUser : (state , {payload}) => {
            console.log(payload)
        } , 
        logoutUser : (state) => {
            state.user = null
        }
    }
})

export const {loginUser , logoutUser} = userSlice.actions

export default userSlice.reducer