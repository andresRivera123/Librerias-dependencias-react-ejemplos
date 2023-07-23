import { Button, Fab, styled } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { theme } from "./theme";

function ThemeM() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.otherColor.main,
    color: "#888",
    margin: "5",
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      background: "gray",
      color: "white",
    },
  }));

  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button variant="contained" color="otherColor">
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
      <BlueButton>Hola</BlueButton>
      <Fab color="primary" aria-label="add">
        <AddIcon/>
      </Fab>
    </div>
  );
}

export default ThemeM;
