import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Grid, Stack } from "@mui/material";
import { MealDashboard } from "../../components/MealDashboard"
import { AccountCircle } from '@mui/icons-material';

function appBarLabel(label: string) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">
        {label}
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
    </Toolbar>
  );
}

export default function Home() {
  return (
    <>
    <Stack spacing={5}>
      <AppBar position="static" color="primary">
        {appBarLabel('食費管理')}
      </AppBar>
      
        <Grid container alignItems="center" >
        <Grid item xs={12}>
            <Typography textAlign="center" component="div" variant="h5">
            一日の食費　 合計 : 3000 円
            </Typography>
      </Grid>
      </Grid>
    
      
    <Stack direction="row">
      <MealDashboard title = "朝食"/>
      <MealDashboard title = "昼食"/>
      <MealDashboard title = "夕食"/> 
    </Stack>
    </Stack>
    </>
  );
}
