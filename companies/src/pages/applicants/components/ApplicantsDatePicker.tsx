import 'react-datepicker/dist/react-datepicker.css'
import { useEffect, useState } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import { useGetOne } from 'react-admin'
import DatePicker from 'react-datepicker'

const MyDaysPicker = (record: any) => {
  const { data, isLoading } = useGetOne(
    'Event',
    { id: record.data.eventId },
    {
      retry: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )
  const { control } = useFormContext()
  const initialDay: Date[] = []
  const [allowedDays, setAllowedDays] = useState<Date[] | []>(initialDay)

  useEffect(() => {
    if (data) {
      const Dates = data.eventcalendar.map((val: Date) => new Date(val))
      setAllowedDays(Dates)
    }
  }, [data])

  if (isLoading) {
    return <>'Loading...'</>
  }

  return (
    <>
      <Controller
        control={control}
        name="start_date"
        render={({ field: { onChange, onBlur, value } }) => (
          <DatePicker selected={value} onChange={onChange} onBlur={onBlur} includeDates={allowedDays} />
        )}
      />
    </>
  )
}

export default MyDaysPicker
