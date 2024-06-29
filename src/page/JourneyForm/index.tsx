import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  Button,
  LinearProgress,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import useImageUpload from "./hooks/useImageUpload";
import { API } from "../../lib/Api";
import { useNavigate } from "react-router-dom";
import Editor from "react-simple-wysiwyg";

const JourneyForm = () => {
  const [title, setTitle] = useState("");
  const { image, imageUrl, handleImageChange, resetImage } = useImageUpload();
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();
  const [html, setHtml] = useState("");

  function onChange(e: any) {
    setHtml(e.target.value);
  }
  const handleTitleChange = (event: any) => {
    setTitle(event.target.value);
  };

  console.log(html);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image!);
      formData.append("title", title);
      formData.append("content", html);

      const response = await API.post("/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent.loaded / progressEvent.total!) * 100;
          setUploadProgress(progress);
        },
      });

      console.log("Post created successfully:", response.data);
      setTitle("");
      resetImage();
      setUploadProgress(0);
      navigate("/");
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <Box paddingX={5} marginTop={5}>
      <Typography color="black" variant="h4" fontWeight="bold" marginBottom={3}>
        New Journey
      </Typography>
      <Box marginBottom={3}>
        <Typography variant="subtitle1" marginBottom={1}>
          Upload Image
        </Typography>
        <Box sx={{ padding: 2, marginBottom: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 300,
              border: "2px dashed #ccc",
              borderRadius: 8,
              position: "relative",
            }}
          >
            {imageUrl ? (
              <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                <img
                  src={imageUrl}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />
                <IconButton
                  color="primary"
                  component="label"
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    border: "1px solid #ccc",
                    borderRadius: "50%",
                  }}
                >
                  <PhotoCamera />
                  <input
                    id="upload-image"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </IconButton>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <IconButton color="primary" component="label">
                  <PhotoCamera />
                  <input
                    id="upload-image"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                </IconButton>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6">Title</Typography>
        <TextField
          id="title"
          fullWidth
          variant="outlined"
          margin="normal"
          value={title}
          onChange={handleTitleChange}
        />
      </Box>
      <Box marginBottom={3}>
        <Typography variant="h6">Content</Typography>
        <Editor
          value={html}
          onChange={onChange}
          style={{ backgroundColor: "white", height: "200px" }}
        />
      </Box>
      {uploadProgress > 0 && (
        <Box marginBottom={3}>
          <LinearProgress variant="determinate" value={uploadProgress} />
        </Box>
      )}
      <Box display="flex" justifyContent="flex-end" paddingBottom={"20px"}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Post
        </Button>
      </Box>
    </Box>
  );
};

export default JourneyForm;
