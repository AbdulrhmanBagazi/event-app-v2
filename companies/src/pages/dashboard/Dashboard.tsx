import { useEffect, useState } from 'react'
import { Loading, Title, useDataProvider, useTranslate } from 'react-admin'
import TotalDashboard from './components/TotalDashboard'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Festival, Work, AvTimer, Article } from '../../theme/icons'
import MyError from '../../layout/MyError'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import TotalUsers from './components/TotalUsers'

type Data = {
  data: gqlresponse | undefined
}

type Applicantscount = {
  status: string
  _count: countStatus
}

type countStatus = {
  status: number
}

type gqlresponse = {
  Events_count: number
  Jobs_count: number
  Shifts_count: number
  Applicants_count: [Applicantscount]
}

const Dashboard = () => {
  const translate = useTranslate()
  const dataProvider = useDataProvider()
  const [data, setData] = useState<gqlresponse>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    setLoading(true)
    dataProvider
      .getData('DashboardData')
      .then((data: Data) => {
        if (data.data) {
          setData(data.data)
          setError(false)
          setLoading(false)
          return
        }
        setError(true)
        setLoading(false)
        return
      })
      .catch((_error: any) => {
        setError(true)
        setLoading(false)
        return
      })
  }, [dataProvider, refresh])

  if (loading) return <Loading />

  if (error) return <MyError onClick={() => setRefresh(!refresh)} />

  if (!data) return <MyError onClick={() => setRefresh(!refresh)} />

  return (
    <Box sx={{ paddingTop: 1 }}>
      <Title title={translate('Dashboard')} />
      <Grid container spacing={0.5}>
        <Grid item xs={12}>
          <TotalDashboard value={data.Events_count} title="Events" icon={Festival} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TotalDashboard value={data.Jobs_count} title="eventjob" icon={Work} />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TotalDashboard value={data.Shifts_count} title="eventshift" icon={AvTimer} />
        </Grid>
      </Grid>
      <Typography variant="h4" gutterBottom></Typography>
      <Divider />
      <Typography variant="h4" gutterBottom></Typography>
      <Typography variant="h4" gutterBottom>
        {translate('applicants')}
      </Typography>
      <Grid container spacing={0.5}>
        {data.Applicants_count.map((val, i) => {
          return (
            <Grid item xs={12} sm={6} md={6} lg={6} key={i}>
              <TotalUsers value={val._count.status} title={val.status} icon={Article} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}

export default Dashboard
