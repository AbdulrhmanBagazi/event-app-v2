import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../contexts/auth.context'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Link from 'next/link'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { GoogleLogin } from '@react-oauth/google'

export default function Login() {
  const { isAuthenticated, loading, SignIn } = useAuth()
  const router = useRouter()
  const { t } = useTranslation('login')

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated) {
        return router.push('/')
      }

      return
    }
    checkAuth()

    return () => toast.dismiss('signin')
  }, [isAuthenticated])

  const HandleLogin = async (values: { email: string; password: string }) => {
    return SignIn(values)
  }

  return (
    <div className="flex flex-col justify-center flex-1">
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors: { email?: string; password?: string } = {}
          if (!values.email) {
            errors.email = `${t('required')}`
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = `${t('invalid_email')}`
          }

          if (!values.password) {
            errors.password = `${t('required')}`
          }
          return errors
        }}
        onSubmit={(values) => {
          HandleLogin(values)
        }}>
        {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
          <Form className="flex flex-col flex-1 p-10" onSubmit={handleSubmit}>
            <Field
              type="email"
              name="email"
              className="my-5 border-2"
              placeholder={`${t('email')}`}
              autoComplete="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              required
            />
            <ErrorMessage name="email" component="div" />

            <Field
              type="password"
              name="password"
              className="my-5 border-2"
              placeholder={`${t('password')}`}
              autoComplete="current-password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              required
            />
            <ErrorMessage name="password" component="div" />

            <button
              type="submit"
              className={`${
                errors?.email || errors?.password || loading ? 'bg-gray-500' : 'bg-green-500'
              } text-white`}
              disabled={loading}>
              {`${t('login')}`}
            </button>
          </Form>
        )}
      </Formik>
      <Link href="/register">
        <button
          className="self-center bg-blue-500 rounded focus:outline-none border-stone-500 hover:border-stone-900"
          disabled={loading}>
          <p className="self-center px-3 font-sans text-white">{`${t('register')}`}</p>
        </button>
      </Link>

      <div className="items-center self-center my-5">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse)
          }}
          onError={() => {
            console.log('Login Failed')
          }}
        />
      </div>
    </div>
  )
}

//first time open google
//  {
//   clientId: '903376713954-3cn2dv783u0q37pguid52dtrlebi16g9.apps.googleusercontent.com',
//   credential:
//     'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQwMmYzMDViNzA1ODEzMj…q34ypRcAsTyK8Fqqq-Qcn8A97T7rs0cqwmeK0erd3vDlVSQ7w',
//   select_by: 'btn',
// }

//second time credential change
// {
//   clientId: '903376713954-3cn2dv783u0q37pguid52dtrlebi16g9.apps.googleusercontent.com',
//   credential:
//     'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQwMmYzMDViNzA1ODEzMj…Dx3lhlCt56M2MOw7sIt6t5i6G5JHmfEYEr6Y5pJqHrFLDnmfg',
//   select_by: 'btn',
// }

// const x = {
//   clientId: '903376713954-3cn2dv783u0q37pguid52dtrlebi16g9.apps.googleusercontent.com',
//   credential:
//     'eyJhbGciOiJSUzI1NiIsImtpZCI6IjQwMmYzMDViNzA1ODEzMj…NtMy6Yc_0mU_NUnBnpXFDLx3ofEovNYhmq6pOnD3qOYcpCs7g',
//   select_by: 'btn',
// }
