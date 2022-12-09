import 'react-day-picker/dist/style.css'
import { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import { useFormContext, Controller } from 'react-hook-form'
import ar from 'date-fns/locale/ar'
import en from 'date-fns/locale/en-US'
import moment from 'moment'
import { useLocaleState } from 'react-admin'

const MyDaysPicker = (data: any) => {
  const { setValue, control } = useFormContext()
  const [locale] = useLocaleState()
  const initialDays: Date[] = []
  const [days, setDays] = useState<Date[] | undefined>(initialDays)

  let footer = (
    <p>
      {locale === 'en' ? 'days: ' : 'الآيام: '}
      {days ? days.length : 0}
    </p>
  )

  useEffect(() => {
    if (data.data) {
      const Dates = data.data.eventcalendar.map((val: Date) => new Date(val))
      setDays(Dates)
    }
  }, [data])

  useEffect(() => {
    if (days) {
      const savevalues = days.map((val: Date) => moment(val).format('YYYY-MM-DD'))
      setValue('eventcalendar', savevalues)
    }
  }, [days, setValue])

  return (
    <>
      <Controller
        control={control}
        name="eventcalendar"
        render={({ field: { onChange, onBlur } }) => (
          <DayPicker
            mode="multiple"
            dir="ltr"
            selected={days}
            onDayClick={onChange}
            onDayBlur={onBlur}
            onSelect={setDays}
            footer={footer}
            locale={locale === 'en' ? en : ar}
          />
        )}
      />
    </>
  )
}

export default MyDaysPicker
