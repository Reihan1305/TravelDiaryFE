import { createSlice } from "@reduxjs/toolkit"
import { detailPost } from "../async/detailPost"


const initialState : {detailJourney : IPost}= {
    detailJourney : {} as IPost
}

export const detailJourney = createSlice({
    name:"detailPost",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(detailPost.fulfilled,(state,action)=>{
            state.detailJourney = action.payload
        })
        builder.addCase(detailPost.rejected,(_,action)=>{
            console.log("rejected", action);
        })
        builder.addCase(detailPost.pending,(_,action)=>{
            console.log("PENDING", action);
        })
    },
})

export default detailJourney.reducer