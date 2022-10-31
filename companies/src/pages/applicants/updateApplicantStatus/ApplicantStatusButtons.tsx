import { useUpdate, useTranslate } from 'react-admin'
import Button from '@mui/material/Button'

const Applicants_Status = {
  PENDING: 'PENDING', //
  WAITLIST: 'WAITLIST', //
  INTERVIEW: 'INTERVIEW', //
  APPROVED: 'APPROVED', //
  DECLINED: 'DECLINED', //
  //
  //   CANCELED: 'CANCELED',
  //
  COMPLETED: 'COMPLETED',
  INACTIVE: 'INACTIVE',
}

const sx = {
  marginRight: 2,
  marginLeft: 2,
}

export const DeclineButton = ({ record }: any) => {
  const [update, { isLoading, error }] = useUpdate('applicants', {
    id: record.id,
    data: { status: Applicants_Status.DECLINED },
    previousData: record,
  })
  const translate = useTranslate()
  const handleClick = () => {
    update()
  }
  const status = record.status === 'APPROVED' || record.status === 'DECLINED'

  if (error) {
    return <p>ERROR</p>
  }

  return (
    <Button variant="contained" color="error" disabled={isLoading || status} onClick={handleClick} sx={sx}>
      {translate('DECLINED')}
    </Button>
  )
}

export const WaitlistButton = ({ record }: any) => {
  const [update, { isLoading, error }] = useUpdate('applicants', {
    id: record.id,
    data: { status: Applicants_Status.WAITLIST },
    previousData: record,
  })
  const translate = useTranslate()
  const handleClick = () => {
    update()
  }
  const status = record.status === 'APPROVED' || record.status === 'DECLINED' || record.status === 'WAITLIST'

  if (error) {
    return <p>ERROR</p>
  }

  return (
    <Button variant="contained" color="info" disabled={isLoading || status} onClick={handleClick} sx={sx}>
      {translate('WAITLIST')}
    </Button>
  )
}

export const InterviewButton = ({ record }: any) => {
  const [update, { isLoading, error }] = useUpdate('applicants', {
    id: record.id,
    data: { status: Applicants_Status.INTERVIEW },
    previousData: record,
  })
  const translate = useTranslate()
  const handleClick = () => {
    update()
  }

  const status = record.status === 'APPROVED' || record.status === 'DECLINED' || record.status === 'INTERVIEW'

  if (error) {
    return <p>ERROR</p>
  }

  return (
    <Button variant="contained" color="info" disabled={isLoading || status} onClick={handleClick} sx={sx}>
      {translate('INTERVIEW')}
    </Button>
  )
}

export const PendingButton = ({ record }: any) => {
  const [update, { isLoading, error }] = useUpdate('applicants', {
    id: record.id,
    data: { status: Applicants_Status.PENDING },
    previousData: record,
  })
  const handleClick = () => {
    update()
  }
  const translate = useTranslate()

  if (error) {
    return <p>ERROR</p>
  }

  return (
    <Button variant="contained" color="warning" disabled={isLoading} onClick={handleClick} sx={sx}>
      {translate('PENDING')}
    </Button>
  )
}

export const ApprovedButton = ({ record }: any) => {
  const [update, { isLoading, error }] = useUpdate('applicants', {
    id: record.id,
    data: { status: Applicants_Status.APPROVED },
    previousData: record,
  })
  const translate = useTranslate()
  const handleClick = () => {
    update()
  }
  const status = record.status === 'APPROVED' || record.status === 'DECLINED'
  if (error) {
    return <p>ERROR</p>
  }

  return (
    <Button variant="contained" color="success" disabled={isLoading || status} onClick={handleClick} sx={sx}>
      {translate('APPROVED')}
    </Button>
  )
}
