import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../lib/Api";

export const userPost = createAsyncThunk<
  IPost[],
  void,
  { rejectValue: string }
>("allpost", async(_, { rejectWithValue }) => {
  try {
    const { data } = await API.get(`/post/user`,{headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }});

    return data;
  } catch (error) {
    return rejectWithValue("error");
  }
});
