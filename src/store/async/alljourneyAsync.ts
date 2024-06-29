import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../lib/Api";

export const getAllPost = createAsyncThunk<
  IPost[],
  void,
  { rejectValue: string }
>("allpost", async (_, { rejectWithValue }) => {
  try {
    const { data } = await API.get("/post");

    return data;
  } catch (error) {
    return rejectWithValue("error");
  }
});
