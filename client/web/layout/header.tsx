import Link from 'next/link'
import { HeaderTypes } from '../@types/index.types'
import SignOut from '../components/Signout_Button/SignOut'
// import { useRouter } from 'next/router'
// import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const LayoutHeader = (props: HeaderTypes) => {
  // const [isShow, setShow] = useState(true)
  // const router = useRouter()
  const { t, i18n } = useTranslation('common')

  return (
    <div className="flex justify-center flex-col sticky top-0 pb-0.5 bg-gradient-to-l from-primary to-secondary">
      <nav className="flex flex-wrap items-center justify-between p-4 bg-white shadow-lg">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Workflow</span>
            <img
              className="w-auto h-8 sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </a>
        </div>

        <div className="flex justify-end flex-1 h-full">
          {props.isAuthenticated && !props.loading ? (
            <SignOut title={t('SignOut')} />
          ) : props.loading ? null : (
            <Link href="/login" aria-disabled={true}>
              <button className="inline-flex items-center justify-center px-4 text-base font-medium text-gray-500 border border-transparent rounded-md whitespace-nowrap hover:text-gray-900">
                {t('SignIn')}
              </button>
            </Link>
          )}
        </div>

        {i18n.language === 'ar' ? (
          <button
            onClick={() => i18n.changeLanguage('en')}
            className="inline-flex items-center justify-center py-2 text-sm font-medium text-gray-500 border border-transparent rounded-md whitespace-nowrap hover:text-gray-900">
            English
          </button>
        ) : (
          <button
            onClick={() => i18n.changeLanguage('ar')}
            className="inline-flex items-center justify-center text-sm font-medium text-gray-500 border border-transparent rounded-md whitespace-nowrap hover:text-gray-900">
            عربي
          </button>
        )}
      </nav>
      {/* 
      <div className="h-10 p-2">
        {props.isAuthenticated && !props?.verfied && isShow && router.pathname !== '/verifyemail/[id]' ? (
          <div
            className="relative flex justify-between px-4 py-3 mx-2 text-blue-700 transition-all duration-500 ease-in bg-blue-100 border border-blue-400 rounded animate__animated animate__fadeIn"
            role="alert">
            <strong className="font-bold">
              Email not verified!{' '}
              <span className="block font-normal sm:inline">we sent you a verification email.</span>
            </strong>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setShow(!isShow)}>
              <svg
                className="w-6 h-6 text-blue-500 fill-current"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        ) : null}
      </div> */}
    </div>
  )
}
