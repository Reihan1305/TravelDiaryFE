import { Box, Typography, CircularProgress, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { detailPost } from "../../store/async/detailPost";
import dayjs from "dayjs";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const detailJourney = useAppSelector((state) => state.detailJourney.detailJourney);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        await dispatch(detailPost(id!));
        setTimeout(() => {
          setLoading(false);
        }, 5000); 
      } catch (error) {
        console.error("Error fetching detail post:", error);
        setLoading(false);
      }
    };

    if (id) {
      fetchDetail();
    }
  }, [dispatch, id]);

  const formatDate = (date: string) => {
    return dayjs(date).format("DD-MM-YYYY");
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          {detailJourney ? (
            <Container>
          
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3" fontWeight="700">
                  {detailJourney.title}
                </Typography>
                <Typography variant="h6" fontWeight="700">
                  {detailJourney.user.name}
                </Typography>
              </Box>
              <Typography sx={{ color: "#1DA1F2" }}>
                {formatDate(detailJourney.datePost)}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
                <img
                  src={detailJourney.image_url}
                  style={{ height: "400px", width: "100%", borderRadius: "20px" }}
                  alt="Journey"
                />
              </Box>
              <Typography variant="body1"
              dangerouslySetInnerHTML={{ __html: detailJourney.content }}>
              </Typography>
            </Container>
          ) : (
            <Typography variant="body1" textAlign="center">
              Journey not found.
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

export default Detail;
