import { Container, Grid, Box, Typography, Button } from "@mui/material";
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
function Home() {
  return (
    <Container>
      <Box sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Keeper
        </Typography>
        <Typography variant="h6" gutterBottom>
            Where you can express your thoughts <StickyNote2Icon/>
        </Typography>
        <Grid container spacing={2}  justifyContent="center">
            <Grid item>
                <Button variant="contained" sx={{ backgroundColor: '#f5ba13', color: '#fff' }}>
                Login
                </Button>
            </Grid>

            <Grid item>
                <Button variant="contained" sx={{ backgroundColor: 'black', color: '#fff' }}>
                Register
                </Button>
            </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
