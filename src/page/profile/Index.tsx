import { Avatar, Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import JourneyCard from "../../component/Journey/JourneyCard";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { userPost } from "../../store/async/PostbyUserAsync";
import { checkAuth } from "../../store/async/LoginAsync";
import dayjs from "dayjs";

const formatDate = (date: string) => {
  return dayjs(date).format("DD-MM-YYYY");
};

const Profile = () => {
  const [isloading, setIsloading] = React.useState(true);
  const profile = useAppSelector((state) => state.auth.profile);
  const profileJourney = useAppSelector(
    (state) => state.profileJourney.journey
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(userPost());
    dispatch(checkAuth())
      .then(() => setIsloading(false))
      .catch(() => setIsloading(false));
  }, []);

  console.log(profile);

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
    <Box paddingX={5} marginTop={5}>
      <Typography color={"black"} variant="h4" fontWeight={"700"}>
        Profile
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Avatar sx={{ width: 150, height: 150 }} src={profile.photoprofile} />
        <Typography variant="h6" fontWeight={"700"} sx={{ mt: 2 }}>
          {profile.name}
        </Typography>
        <Typography>{profile.email}</Typography>
      </Box>
      <Box
        mt={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          minHeight: "100vh",
          flexWrap: "wrap",
          gap: "10px 20px",
        }}
      >
        {profileJourney.map((item) => (
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
    </Box>
  );
};

export default Profile;
