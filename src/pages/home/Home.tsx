import { useState } from 'react'
import { Grid, Stack } from '@mui/material'
import Typography from '@mui/material/Typography'
import { MealDashboard } from '../../components/MealDashboard'
import { HeaderDrawer } from '../../components/HeaderDrawer'

export default function Home() {
  const [mealPrice1, setMealPrice1] = useState(0)
  const [mealPrice2, setMealPrice2] = useState(0)
  const [mealPrice3, setMealPrice3] = useState(0)

  return (
    <>
      <HeaderDrawer />
      <Stack spacing={5}>
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
