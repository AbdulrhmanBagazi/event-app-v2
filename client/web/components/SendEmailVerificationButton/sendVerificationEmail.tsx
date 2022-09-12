// Render Prop
import React, { useState } from 'react'
import { useAuth } from '../../contexts/auth.context'
import { useNotification } from '../../contexts/notification.context'
import { fetcher } from '../../lib/fetch.lib'

const SendVerificationEmail = () => {
  const [isLoading, setLoading] = useState(false)
  const { isAuthenticated, verfied, addError, Verified } = useAuth()
  const { Info, Success } = useNotification()

  const sendNewVerifyEmail = async () => {
    setLoading(true)
    var [error, data] = await fetcher('/authentication/sendverifyemail')

    if (error && !data) {
      addError(error)
    }

    if (data === 'email sent') {
      Info('email sent', 2000)
    }

    if (data === 'wait 15m') {
      Info('email has been sent please wait 15 min if you did not get the email you can request agine', 2000)
    }

    if (data === 'verified') {
      Success('account already verified', 2000)
      Verified()
    }

    setLoading(false)
    return
  }

  if (isAuthenticated && !verfied) {
    return (
      <button onClick={() => sendNewVerifyEmail()} className="bg-blue-400" disabled={isLoading}>
        {isLoading ? 'loading' : 'send Verification Email'}
      </button>
    )
  }

  return null
}

export default SendVerificationEmail
