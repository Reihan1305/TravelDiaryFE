import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../lib/Api";

export const getPostBytitle = createAsyncThunk<
  IPost[],
  string,
  { rejectValue: string }
>("allpost", async (name:string, { rejectWithValue }) => {
  try {
    const { data } = await API.get("/post/name/"+name);

    return data;
  } catch (error) {
    return rejectWithValue("error");
  }
});
