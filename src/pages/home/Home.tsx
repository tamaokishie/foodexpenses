import { useState } from 'react'
import { AccountCircle } from '@mui/icons-material'
import AppBar from '@mui/material/AppBar'
import { Box, Grid, Stack } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { MealDashboard } from '../../components/MealDashboard'

function appBarLabel(label: string) {
  return (
    <Toolbar>
      <IconButton edge='start' color='inherit' sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant='h6'>{label}</Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <IconButton size='large' edge='end' color='inherit'>
          <AccountCircle />
        </IconButton>
      </Box>
    </Toolbar>
  )
}

export default function Home() {
  const [mealPrice1, setMealPrice1] = useState(0)
  const [mealPrice2, setMealPrice2] = useState(0)
  const [mealPrice3, setMealPrice3] = useState(0)

  //３つのテーブルの計算をする

  return (
    <>
      <Stack spacing={5}>
        <AppBar position='static' style={{ backgroundColor: '#01579b' }}>
          {appBarLabel('食費管理')}
        </AppBar>
        <Grid container alignItems='center'>
          <Grid item xs={12}>
            <Typography textAlign='center' component='div'>
              一日の食費
            </Typography>
            <Typography textAlign='center' component='div' variant='h5'>
              <b>
                合計 :{' '}
                <b style={{ color: '#1976D2' }}>
                  {mealPrice1 + mealPrice2 + mealPrice3}
                </b>{' '}
                円
              </b>
            </Typography>
          </Grid>
        </Grid>
        <Stack direction='row'>
          <MealDashboard title='朝食' setMealPrice={setMealPrice1} />
          <MealDashboard title='昼食' setMealPrice={setMealPrice2} />
          <MealDashboard title='夕食' setMealPrice={setMealPrice3} />
        </Stack>
      </Stack>
    </>
  )
}
