import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  LinearProgress,
  CircularProgress,
} from "@mui/material";
import { PhotoCamera, BookmarkBorder as BookmarkBorderIcon, Bookmark as BookmarkIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { checkBookmark } from "../../store/async/getPostOnBookmark";
import { API } from "../../lib/Api";

interface IProps {
  img: string;
  title: string;
  content: string;
  date: string;
  id: string;
  author: string;
}

const JourneyCard: React.FC<IProps> = ({
  img,
  title,
  content,
  date,
  id,
  author,
}: IProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [isBookmark, setIsBookmark] = useState(false); // Local state to track bookmark status

  const handleCheckBookmark = async () => {
    setLoading(true);
    try {
      const response = await API.get(`/bookmark/onBookmark/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setIsBookmark(response.data); // Set local state based on API response
    } catch (error) {
      console.error("Error while checking bookmark:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBookmark = async (PostId: string) => {
    setLoading(true);
    try {
      await API.post(`/bookmark/${PostId}`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      handleCheckBookmark();
      dispatch(checkBookmark(PostId));
    } catch (error) {
      console.error("Error while handling bookmark:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    handleCheckBookmark();
  }, [isBookmark]);

  return (
    <Box
      sx={{
        bgcolor: "white",
        border: "1px solid #ddd",
        overflow: "hidden",
        boxShadow: 1,
        width: "270px",
        height: "370px",
        borderRadius: "10px 10px 0 0",
      }}
    >
      <Box
        sx={{
          position: "relative",
          backgroundSize: "cover",
          backgroundImage: `url(${img})`,
          height: 180,
          borderRadius: "0 0 10px 10px",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            backgroundColor: "white",
          }}
          onClick={() => {
            handleBookmark(id);
          }}
          disabled={loading} // Disable button while loading
        >
          {loading ? (
            <CircularProgress size={24} />
          ) : isBookmark ? (
            <BookmarkIcon sx={{ fill: "#3B97D3" }} />
          ) : (
            <BookmarkBorderIcon sx={{ fill: "#3B97D3" }} />
          )}
        </IconButton>
      </Box>
      <Box
        marginTop={"10px"}
        paddingX={"20px"}
        onClick={() => navigate(`/detailjourney/${id}`)}
        style={{ cursor: "pointer" }}
      >
        <Typography
          textAlign={"center"}
          variant="h6"
          component="div"
          sx={{ fontWeight: "700", color: "#000" }}
        >
          {title}
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "gray", mt: 1 }}>
          {date},{author}
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "100px",
            overflow: "hidden",
            mb: "10px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#6C6C6C",
              fontWeight: "700",
              WebkitLineClamp: 4,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default JourneyCard;
