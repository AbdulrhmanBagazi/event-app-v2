import PersonIcon from '@mui/icons-material/Person'
import { useTranslate } from 'react-admin'
import CardWithIcon from './CardWithIcon'

interface Props {
  value?: string
}

const TotalUsers = (props: Props) => {
  const { value } = props
  const translate = useTranslate()
  return <CardWithIcon icon={PersonIcon} title={translate('dashboard.total_users')} subtitle={value} />
}

export default TotalUsers
