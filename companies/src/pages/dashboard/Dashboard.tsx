
import { Title, useTranslate } from 'react-admin'
import TotalUsers from './components/TotalUsers';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';




const Dashboard = () => {
  const translate = useTranslate()



  return (
    <Box sx={{ paddingTop: 1 }}>
      <Title title={translate('Dashboard')} />
      <Grid container spacing={0.5}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TotalUsers value='15000' />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TotalUsers value='15000' />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TotalUsers value='15000' />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TotalUsers value='15000' />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
