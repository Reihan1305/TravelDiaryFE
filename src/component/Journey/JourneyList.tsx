import {
  Box,
  Button,
  TextField,
  Typography,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import React from "react";
import JourneyCard from "./JourneyCard";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getAllPost } from "../../store/async/alljourneyAsync";
import dayjs from "dayjs"; // For date formatting
import { getPostBytitle } from "../../store/async/getJourneyBytitle";

const JourneyList = () => {
  const dispatch = useAppDispatch();
  const allJourney = useAppSelector((state) => state.allJourney.journey) || []; // Ensure default to an empty array
  const [loading, setLoading] = React.useState(true);
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    dispatch(getAllPost())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  const formatDate = (date: string) => {
    return dayjs(date).format("DD-MM-YYYY");
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      await dispatch(getPostBytitle(name));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading)
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
    <Box paddingX={5}>
      <Typography
        color={"black"}
        variant="h4"
        fontWeight={"700"}
        sx={{ marginTop: "50px" }}
      >
        Journey
      </Typography>
      <Box paddingX={5}>
        <TextField
          placeholder="Find Journey"
          size="small"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            bgcolor: "white",
            width: "100%",
            marginTop: "30px",
            borderRadius: "4px",
            "& .MuiOutlinedInput-root": {
              paddingRight: "0",
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  sx={{
                    color: "white",
                    bgcolor: "#2E86DE",
                    height: "100%",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    paddingX: 3,
                    paddingY: "19px",
                  }}
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box mt={3} display="flex" flexWrap="wrap" gap="20px">
        {allJourney.length === 0 ? (
          <Box height="100vh">
            <Typography variant="h6" color="gray" textAlign={"center"}>
              Journey not found
            </Typography>
          </Box>
        ) : (
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
            {allJourney.map((item) => (
              <JourneyCard
                author={item.user.name}
                img={item.image_url}
                title={item.title}
                date={formatDate(item.datePost)}
                content={item.content}
                id={item.id}
              />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default JourneyList;
