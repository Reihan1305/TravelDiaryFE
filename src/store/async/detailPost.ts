import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../lib/Api";

export const detailPost = createAsyncThunk<
  IPost,
  string,
  { rejectValue: string }
>("allpost", async(postId:string, { rejectWithValue }) => {
  try {
    const { data } = await API.get(`/post/detail/${postId}`);

    console.log(data);
    return data;
    
  } catch (error) {
    return rejectWithValue("error");
  }
});
