import { createSlice } from "@reduxjs/toolkit"
import { getAllPost } from "../async/alljourneyAsync"
import { userPost } from "../async/PostbyUserAsync"
import { onBookmark } from "../async/getPostOnBookmark"


const initialState : {onBookmark : IBookmark[]}= {
    onBookmark :[]
}

export const onBookmarkJourney = createSlice({
    name:"allpost",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(onBookmark.fulfilled,(state,action)=>{
            state.onBookmark = action.payload
        })
        builder.addCase(onBookmark.rejected,(_,action)=>{
            console.log("rejected", action);
        })
        builder.addCase(onBookmark.pending,(_,action)=>{
            console.log("PENDING", action);
        })
    },
})

export default onBookmarkJourney.reducer