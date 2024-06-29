import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import JourneyCard from "../../component/Journey/JourneyCard";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { onBookmark } from "../../store/async/getPostOnBookmark";
import dayjs from "dayjs";

const Bookmark = () => {
  const onBookmarkJourney = useAppSelector((state) => state.onBookmark.onBookmark);
  const dispatch = useAppDispatch();
  const [isloading,setIsloading] = React.useState(true)
  React.useEffect(() => {
    dispatch(onBookmark()).then(()=>setIsloading(false)).catch(()=>setIsloading(false))
  }, [dispatch]);


  const formatDate = (date:string) => {
    return dayjs(date).format("DD/MM/YYYY");
  };

  if (isloading)
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  return (
    <Box paddingX={5} marginTop={5} height="100vh">
      <Typography color={"black"} variant="h4" fontWeight={"700"}>
        Bookmark
      </Typography>
      <Box
            mt={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              minHeight: "100vh",
              flexWrap: "wrap",
              gap: "10px 20px",
            }}
          >
        {onBookmarkJourney.map((item) => (
            <JourneyCard
            author={item.Post.user.name}
              img={item.Post.image_url}
              title={item.Post.title}
              date={formatDate(item.Post.datePost)}
              content={item.Post.content}
              id={item.Post.id}
            />
        ))}
      </Box>
    </Box>
  );
};

export default Bookmark;
