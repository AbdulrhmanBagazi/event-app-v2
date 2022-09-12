import 'animate.css/animate.min.css'
import React, { createContext, useState, useContext, useEffect, ReactElement } from 'react'
import { AuthenticatedTypes, SignInTypes, SignUpTypes, UserTypes } from '../@types/index.types'
import { fetcher, poster } from '../lib/fetch.lib'
import { toast, cssTransition } from 'react-toastify'
import { useTranslation } from 'react-i18next'

const bounce = cssTransition({
  enter: 'animate__animated animate__fadeIn',
  exit: 'animate__animated animate__fadeOut',
})

export const AuthContext = createContext<AuthenticatedTypes>({
  isAuthenticated: false,
  user: null,
  loading: true,
  verfied: null,
  SignOut: () => {},
  SignIn: () => {},
  SignUp: () => {},
  Unauthorized: () => {},
  Verified: () => {},
  addError: () => {},
})

export const AuthProvider = ({ children }: { children: ReactElement }): JSX.Element => {
  const [user, setUser] = useState<UserTypes | null>(null)
  const [verfied, setVerfied] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAuth, setAuth] = useState(false)
  const [isUnauthorized, setUnauthorized] = React.useState<string | null>(null)
  const [OtherNoti, setOtherNoti] = React.useState<string | null>(null)
  const { t } = useTranslation('common')

  useEffect(() => {
    const Authenticate = async () => {
      setLoading(true)
      const [error, data] = await fetcher('/authentication')

      if (error && !data) {
        // addError(error)
        setAuth(false)
        setLoading(false)
        return
      }

      setVerfied(data?.user?.verfied)
      setUser(data?.user)
      setAuth(true)
      setLoading(false)
    }

    Authenticate()
  }, [])

  const SignOut = async () => {
    setLoading(true)

    const [error, data] = await fetcher('/authentication/signout')

    if (error && !data) {
      addError(error)
      setUser(null)
      setLoading(false)
      return
    }

    setUser(null)
    setAuth(false)
    setLoading(false)
  }

  const SignIn = async (values: SignInTypes) => {
    toast.dismiss('signin')
    setLoading(true)

    const [error, data]: any[string] = await poster('/authentication/signin', values)

    if (error && !data) {
      setTimeout(() => {
        addError(error, 'signin')
        setUser(null)
        setLoading(false)
      }, 1500)
      return
    }

    setAuth(true)
    setVerfied(data?.user?.verfied)
    setUser(data?.user)
    setLoading(false)
  }

  const SignUp = async (values: SignUpTypes) => {
    toast.dismiss('signup')
    setLoading(true)

    const [error, data]: any[string] = await poster('/authentication/signup', values)

    if (error && !data) {
      setTimeout(() => {
        addError(error, 'signup')
        setUser(null)
        setLoading(false)
      }, 1500)
      return
    }

    setVerfied(data?.user?.verfied)
    setUser(data?.user)
    setTimeout(() => {
      setAuth(true)
      setLoading(false)
    }, 1000)
  }

  const Unauthorized = async () => {
    setLoading(true)
    setUser(null)
    setAuth(false)
    setVerfied(null)
    setLoading(false)
  }

  const Verified = async () => {
    setVerfied(true)
  }

  const addError = async (error: any, route?: string) => {
    if (route === 'signin' && error?.error === 'Unauthorized') {
      toast.error(`${t('the email or password you entered invalid')}`, {
        transition: bounce,
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
        toastId: 'signin',
      })

      return
    }

    if (route === 'signup' && error?.error?.error === 'P2002') {
      toast.error(`${t('email used!')}`, {
        transition: bounce,
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
        toastId: 'signup',
      })

      return
    }

    if (error?.error === 'Unauthorized') {
      if (isUnauthorized) await toast.dismiss(isUnauthorized)

      const noti = toast.error(`${t('session ended please login! ')}`, {
        transition: bounce,
        position: toast.POSITION.TOP_CENTER,
        delay: isUnauthorized ? 350 : 0,
      })
      setUnauthorized(noti.toString())
      Unauthorized()
      return
    }

    if (OtherNoti) await toast.dismiss(OtherNoti)

    //`${error?.error}  ${error?.status}`
    const noti = toast.error(`${error?.error}  ${error?.status}`, {
      transition: bounce,
      position: toast.POSITION.TOP_CENTER,
      delay: OtherNoti ? 350 : 0,
    })

    setOtherNoti(noti.toString())

    return
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuth,
        user,
        loading,
        verfied,
        SignOut,
        SignIn,
        SignUp,
        Unauthorized,
        Verified,
        addError,
      }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext<AuthenticatedTypes>(AuthContext)
