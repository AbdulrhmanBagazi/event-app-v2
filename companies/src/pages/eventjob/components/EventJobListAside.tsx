import { Card, CardContent } from '@mui/material'
import { FilterList, FilterListItem } from 'react-admin'
import { StackedBarChart } from '../../../theme/icons'

const EventJobListAside = () => {
  return (
    <Card
      sx={{
        alignSelf: 'flex-start',
        marginTop: 9,
        marginRight: 2.5,
        marginLeft: 2.5,
      }}>
      <CardContent>
        <FilterList label="resources.eventjob.fields.status" icon={<StackedBarChart />}>
          <FilterListItem label="resources.eventjob.status.OPEN" key="OPEN" value={{ status: 'OPEN' }} />
          <FilterListItem
            label="resources.eventjob.status.CLOSED"
            key="CLOSED"
            value={{ status: 'CLOSED' }}
          />
        </FilterList>
      </CardContent>
    </Card>
  )
}

export default EventJobListAside
