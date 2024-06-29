import { createSlice } from "@reduxjs/toolkit"
import { getAllPost } from "../async/alljourneyAsync"


const initialState : {journey : IPost[]}= {
    journey :[]
}

export const postSlice = createSlice({
    name:"allpost",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getAllPost.fulfilled,(state,action)=>{
            state.journey = action.payload
        })
        builder.addCase(getAllPost.rejected,(_,action)=>{
            console.log("rejected", action);
        })
        builder.addCase(getAllPost.pending,(_,action)=>{
            console.log("PENDING", action);
        })
    },
})

export default postSlice.reducer