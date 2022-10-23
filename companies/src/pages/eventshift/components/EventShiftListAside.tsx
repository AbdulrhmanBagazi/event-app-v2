import { Card, CardContent } from '@mui/material'
import { FilterList, FilterListItem } from 'react-admin'
import { StackedBarChart } from '../../../theme/icons'

const EventShiftListAside = () => {
  return (
    <Card
      sx={{
        alignSelf: 'flex-start',
        marginTop: 9,
        marginRight: 2.5,
        marginLeft: 2.5,
      }}>
      <CardContent>
        <FilterList label="resources.eventshift.fields.status" icon={<StackedBarChart />}>
          <FilterListItem label="resources.eventshift.status.OPEN" key="OPEN" value={{ status: 'OPEN' }} />
          <FilterListItem
            label="resources.eventshift.status.CLOSED"
            key="CLOSED"
            value={{ status: 'CLOSED' }}
          />
        </FilterList>
      </CardContent>
    </Card>
  )
}

export default EventShiftListAside
