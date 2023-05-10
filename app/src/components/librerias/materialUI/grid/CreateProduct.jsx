import { Container, Box, Grid, Typography } from "@mui/material";

function CreateProduct() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
        p: 2,
        width: "100%",
        minWidth: 300,
        border: 3,
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography sx={{ textAlign: "center", fontSize: "30px" }}>
            Crear Producto
          </Typography>
          <Form></Form>
          <Grid container columns={12} spacing={2} sx={{textAlign: "center", marginTop: "2px"}}>
            <Grid item sx={{backgroundColor: "pink"}}>
            <div className="mb-3">
          <label className="block">Nombre</label>
          <input
            type="text"
            {...register("nombre", {
              required: true,
              maxLength: 10,
            })}
            className="border"
          />
          {errors.nombre?.type === "required" && (
            <p className="text-red-600">El campo nombre es requerido</p>
          )}
          {errors.nombre?.type === "maxLength" && (
            <p className="text-blue-600">
              El campo debe tener menos de 10 caracteres
            </p>
          )}
        </div>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateProduct;
