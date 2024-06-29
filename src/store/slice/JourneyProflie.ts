import { createSlice } from "@reduxjs/toolkit"
import { getAllPost } from "../async/alljourneyAsync"
import { userPost } from "../async/PostbyUserAsync"


const initialState : {journey : IPost[]}= {
    journey :[]
}

export const userJourney = createSlice({
    name:"allpost",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(userPost.fulfilled,(state,action)=>{
            state.journey = action.payload
        })
        builder.addCase(userPost.rejected,(_,action)=>{
            console.log("rejected", action);
        })
        builder.addCase(userPost.pending,(_,action)=>{
            console.log("PENDING", action);
        })
    },
})

export default userJourney.reducer