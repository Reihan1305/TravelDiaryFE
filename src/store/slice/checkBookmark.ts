import { createSlice } from '@reduxjs/toolkit';
import { checkBookmark } from '../async/getPostOnBookmark';


const initialState:{isBookmarked:boolean} = {
  isBookmarked: false,
};

const bookmarkSlice = createSlice({
  name: 'bookmark',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkBookmark.pending, (_,action) => {
        console.log("pending",action);
        
      })
      .addCase(checkBookmark.fulfilled, (state, action) => {
        state.isBookmarked = action.payload;
      })
      .addCase(checkBookmark.rejected, (state, action) => {
        console.log("rejected",action);
        
      });
  },
});
export default bookmarkSlice.reducer;
