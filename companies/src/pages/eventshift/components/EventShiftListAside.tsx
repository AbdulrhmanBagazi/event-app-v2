import { Card, CardContent } from '@mui/material'
import { FilterList, FilterListItem, useGetList, useLocaleState } from 'react-admin'
import { Festival, StackedBarChart } from '../../../theme/icons'

const EventShiftListAside = () => {
  const { data } = useGetList('Event', {
    pagination: { page: 1, perPage: 100 },
    sort: { field: 'createdAt', order: 'ASC' },
  })

  const [locale] = useLocaleState()

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
        <FilterList label="resources.eventshift.fields.eventId" icon={<Festival />}>
          {data &&
            data.map((record: any) => (
              <FilterListItem
                label={locale === 'en' ? record.title_en : record.title}
                key={record.id}
                value={{ eventId: record.id }}
              />
            ))}
        </FilterList>
      </CardContent>
    </Card>
  )
}

export default EventShiftListAside
