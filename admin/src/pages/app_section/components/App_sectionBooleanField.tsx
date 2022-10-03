import { useRecordContext, BooleanField, BooleanFieldProps } from 'react-admin'
import CheckBoxOutlineBlank from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBox from '@mui/icons-material/CheckBox'

const App_sectionBooleanField = (props: BooleanFieldProps) => {
  const record = useRecordContext(props)

  if (!record || !props.source) return null

  return record[props.source] ? (
    <BooleanField {...props} sx={{ color: 'green' }} TrueIcon={CheckBox} />
  ) : (
    <BooleanField {...props} sx={{ color: 'gray' }} FalseIcon={CheckBoxOutlineBlank} />
  )
}

export default App_sectionBooleanField
