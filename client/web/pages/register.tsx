import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAuth } from '../contexts/auth.context'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

export default function Register() {
  const { isAuthenticated, loading, SignUp } = useAuth()
  const router = useRouter()
  const { t } = useTranslation('register')

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated) {
        return router.push('/')
      }
    }
    checkAuth()

    return () => toast.dismiss('signup')
  }, [isAuthenticated])

  return (
    <div>
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
          SignUp(values)
        }}>
        {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
          <Form className="flex flex-col flex-1 p-20" onSubmit={handleSubmit} autoComplete="off">
            <Field
              type="text"
              name="email"
              className="my-5 border-2"
              placeholder={`${t('email')}`}
              autoComplete="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
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
            />
            <ErrorMessage name="password" component="div" />

            <button
              type="submit"
              className={`my-5 ${
                errors?.email || errors?.password || loading ? 'bg-gray-500' : 'bg-green-500'
              } text-white`}
              disabled={loading}>
              {`${t('register')}`}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
