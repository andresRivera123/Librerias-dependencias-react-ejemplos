import { Box, Container } from "@mui/material";
import bgImage from "../../assets/main/bgImage.jpg";
import Navbar from "../navbar/Navbar";
const Hero = () => {
  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        p: { sx: 2, sm: 5, md: 2 },
        background: `url(${bgImage}) center center/cover`,
        minHeight: "800px",
        borderRadius: { xs: "0px 0px 27px 27px", md: "0px 0px 54px 54px" },
      }}
    >
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Navbar/>
        </Box>
    </Container>
  );
};

export default Hero;
