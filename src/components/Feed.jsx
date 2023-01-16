import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "./index";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCateogry, setSelectedCateogry] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCateogry}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCateogry]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sm: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCateogry={selectedCateogry}
          setSelectedCateogry={setSelectedCateogry}
        />
        <Typography
          className="copyright"
          sx={{ mt: 1.5, color: "#fff" }}
          variant="body2"
        >
          Copy right 2023 Media App
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
        <Typography variant="h4" mb={2} sx={{ color: "white" }}>
          {selectedCateogry} <span style={{ color: "#F31503" }}>Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
