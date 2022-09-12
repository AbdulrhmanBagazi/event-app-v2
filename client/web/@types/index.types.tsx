export type UserTypes = {
  id: string
  email: string
  verfied: boolean
}

export type AuthenticatedTypes = {
  isAuthenticated: boolean
  user: UserTypes | null
  verfied: boolean | null
  loading: boolean
  SignOut: () => void
  SignIn: (arg0: SignInTypes) => void
  SignUp: (arg0: SignInTypes) => void
  Unauthorized: () => void
  Verified: () => void
  addError: (error: any, route?: string) => void
}

export type ErrorTypes = {
  massage: string | undefined
  color: string | undefined
  show: boolean
}

export type ErrorContextTypes = {
  addError: (error: any, route?: string) => void
}

export type NotificationContextTypes = {
  Info: (msg: string, autoClose: false | number) => void
  Success: (msg: string, autoClose: false | number) => void
  Warning: (msg: string, autoClose: false | number) => void
  Error: (msg: string, autoClose: false | number) => void
  autoCloseConfig: number
}

export type HeaderTypes = {
  isAuthenticated: boolean
  loading: boolean
  verfied: boolean | null
}

export type SingOutButtonType = {
  title: string
}

export type SignInTypes = {
  email: string
  password: string
}

export type SignUpTypes = {
  email: string
  password: string
}

interface user {
  user: UserTypes
}

export type QueryResponse = [
  error: { data: Array<any> | object | string; status: number } | null,
  data: user | any
]
