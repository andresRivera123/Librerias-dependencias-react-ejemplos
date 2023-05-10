import { Box, Grid, Typography, Container } from "@mui/material";

function CardGrid() {
  return (
    <Container sx={{maxWidth: "lg"}}>
      <Box
        sx={{
          bgcolor: "background.paper",
          boxShadow: 3,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          border: 3,
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ textAlign: "center", fontSize: "30px"}}>
              San Miguel de Salcedo
            </Typography>
          </Grid>
          <Grid container columns={12} spacing={2} sx={{textAlign: "center", marginTop: "2px"}}>
            <Grid item xs={12} sm={4}>
              <img
                src="https://www.cotopaxi.gob.ec/images/Cantones/Salcedo/Monumento-al-Helado-de-Salcedo.jpg"
                alt="Imagen 1"
                style={{ width: "100%" }}
              ></img>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img
                src="https://www.cotopaxi.gob.ec/images/Cantones/Salcedo/Skate-park-Salcedo-.jpg"
                alt="Imagen 2"
                style={{ width: "100%" }}
              ></img>
            </Grid>
            <Grid item xs={12} sm={4}>
              <img
                src="https://www.cotopaxi.gob.ec/images/Cantones/Salcedo/Iglesia-Central-de-Salcedo.jpg"
                alt="Imagen 3"
                style={{ width: "100%" }}
              ></img>
            </Grid>
            <Grid xs={12} sm={12} sx={{marginTop:"2px", flexGrow: 0, padding: 2}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo saepe repudiandae dolore exercitationem nesciunt magni tenetur doloremque, a quo cum provident non nam dolorem eos. Ex asperiores qui consequuntur, provident debitis ipsa ratione mollitia beatae illum deserunt quae reiciendis temporibus harum veniam iure molestiae impedit, quis atque expedita, eligendi recusandae optio neque adipisci. Perferendis sequi velit porro magni aspernatur, vel reprehenderit culpa harum sed itaque quaerat corporis, earum distinctio sint illum dolore, eaque quos? Voluptatum blanditiis perferendis perspiciatis sed ad laborum cupiditate, iste, molestias vitae laboriosam numquam odio? Tenetur unde quis perspiciatis, autem at laudantium voluptatem quisquam eligendi tempora nulla?</Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default CardGrid;
