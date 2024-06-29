import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import authreducer from "./slice/authSlice"
import postreducer from "./slice/allJourneySlice"
import detailJourneyReducer from "./slice/detailJourneySlice"
import JourneyProfliereducer from "./slice/JourneyProflie";
import onBookmarkReducer from "./slice/onBookmarkSlice"
import checkBookmarkReducer from "./slice/checkBookmark";

const store = configureStore({
   reducer: {
     auth:authreducer,
     detailJourney:detailJourneyReducer,
     allJourney:postreducer,
     profileJourney:JourneyProfliereducer,
     onBookmark:onBookmarkReducer,
     isBookmark:checkBookmarkReducer

   },
});

// static type untuk selector dan dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// hooks yang sudah diberi static type
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;