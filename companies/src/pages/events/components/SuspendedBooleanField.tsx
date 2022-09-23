import { useRecordContext, BooleanField, BooleanFieldProps } from 'react-admin'
import CheckBoxOutlineBlank from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBox from '@mui/icons-material/CheckBox'

const SuspendedBooleanField = (props: BooleanFieldProps) => {
  const record = useRecordContext(props)

  if (!record || !props.source) return null

  return record[props.source] ? (
    <BooleanField {...props} color="secondary.main" TrueIcon={CheckBox} />
  ) : (
    <BooleanField {...props} FalseIcon={CheckBoxOutlineBlank} />
  )
}

export default SuspendedBooleanField
