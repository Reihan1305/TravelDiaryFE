import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../lib/Api";

export const onBookmark = createAsyncThunk<
  IBookmark[],
  void,
  { rejectValue: string }
>("allpost", async(_, { rejectWithValue }) => {
  try {
    const { data } = await API.get(`/bookmark`,{headers:{
        Authorization:`Bearer ${localStorage.getItem('token')}`
    }});

    return data;
  } catch (error) {
    return rejectWithValue("error");
  }
});

export const checkBookmark = createAsyncThunk<
boolean,
string,
{rejectValue:string}>("check",async(postId:string,{rejectWithValue})=>{
  try {
    const {data} =await API.get('/bookmark/onBookmark/'+postId,{
      headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
      }
    })
    return data
  } catch (error) {
    return rejectWithValue('error')
  }
})
