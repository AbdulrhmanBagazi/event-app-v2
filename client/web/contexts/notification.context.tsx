import 'animate.css/animate.min.css'
import React, { createContext, useContext } from 'react'
import { NotificationContextTypes } from '../@types/index.types'
import { toast, cssTransition } from 'react-toastify'

const NotificationContext = createContext<NotificationContextTypes>({
  Info: () => {},
  Success: () => {},
  Warning: () => {},
  Error: () => {},
  autoCloseConfig: 0,
})

const bounce = cssTransition({
  enter: 'animate__animated animate__fadeIn',
  exit: 'animate__animated animate__fadeOut',
})

interface Props {
  children: React.ReactNode
}

export const NotificationProvider: React.FC<Props> = ({ children }) => {
  const Info = async (msg: string, autoClose: false | number) => {
    toast.info(msg, {
      transition: bounce,
      position: toast.POSITION.TOP_CENTER,
      autoClose: autoClose,
    })
    return
  }

  const Success = async (msg: string, autoClose: false | number) => {
    toast.success(msg, {
      transition: bounce,
      position: toast.POSITION.TOP_CENTER,
      autoClose: autoClose,
    })
    return
  }

  const Warning = async (msg: string, autoClose: false | number) => {
    toast.warning(msg, {
      transition: bounce,
      position: toast.POSITION.TOP_CENTER,
      autoClose: autoClose,
    })
    return
  }

  const Error = async (msg: string, autoClose: false | number) => {
    toast.error(msg, {
      transition: bounce,
      position: toast.POSITION.TOP_CENTER,
      autoClose: autoClose,
    })
    return
  }

  const autoCloseConfig = 1500

  return (
    <NotificationContext.Provider value={{ Info, Success, Warning, Error, autoCloseConfig }}>
      {children}
    </NotificationContext.Provider>
  )
}

export const useNotification = () => useContext<NotificationContextTypes>(NotificationContext)
