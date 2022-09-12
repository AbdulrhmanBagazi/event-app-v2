import { useRecordContext, BooleanField, BooleanFieldProps } from 'react-admin'

const ColoredBooleanField = (props: BooleanFieldProps) => {
  const record = useRecordContext(props)

  if (!record || !props.source) return null

  return record[props.source] ? (
    <BooleanField {...props} sx={{ color: 'green' }} />
  ) : (
    <BooleanField {...props} sx={{ color: 'red' }} />
  )
}

export default ColoredBooleanField
