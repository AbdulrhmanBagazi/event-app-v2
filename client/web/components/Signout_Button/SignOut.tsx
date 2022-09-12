// Render Prop
import React from 'react'
import { SingOutButtonType } from '../../@types/index.types'
import { useAuth } from '../../contexts/auth.context'

const SignOut = (props: SingOutButtonType) => {
  const { SignOut } = useAuth()

  return (
    <button
      onClick={() => SignOut()}
      className="inline-flex items-center justify-center px-4 text-base font-medium text-gray-500 border border-transparent rounded-md whitespace-nowrap hover:text-gray-900">
      {props.title}
    </button>
  )
}

export default SignOut
