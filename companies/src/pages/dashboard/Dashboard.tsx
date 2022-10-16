import { useEffect, useState } from 'react'
import { Loading, Title, useDataProvider, useTranslate } from 'react-admin'
import TotalDashboard from './components/TotalDashboard'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Festival, Work, AvTimer } from '../../theme/icons'
import MyError from '../../layout/MyError'

type Data = {
  data: gqlresponse | undefined
}

type gqlresponse = {
  Events_count: number
  Jobs_count: number
  Shifts_count: number
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
    </Box>
  )
}

export default Dashboard
