import { Card, CardContent } from '@mui/material'
import { FilterList, FilterListItem } from 'react-admin'
import { StackedBarChart } from '../../../theme/icons'

const EventListAside = () => {
  return (
    <Card
      sx={{
        alignSelf: 'flex-start',
        marginTop: 9,
        marginRight: 2.5,
        marginLeft: 2.5,
      }}>
      <CardContent>
        <FilterList label="resources.Event.fields.status" icon={<StackedBarChart />}>
          <FilterListItem label="resources.Event.status.soon" key="SOON" value={{ status: 'SOON' }} />
          <FilterListItem label="resources.Event.status.active" key="ACTIVE" value={{ status: 'ACTIVE' }} />
          <FilterListItem
            label="resources.Event.status.completed"
            key="COMPLETED"
            value={{ status: 'COMPLETED' }}
          />
        </FilterList>
        <FilterList label="resources.Event.fields.published" icon={<StackedBarChart />}>
          <FilterListItem label="yes" key="yes" value={{ published: true }} />
          <FilterListItem label="no" key="no" value={{ published: false }} />
        </FilterList>
      </CardContent>
    </Card>
  )
}

export default EventListAside
