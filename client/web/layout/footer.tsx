// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import { useTranslation } from 'react-i18next'

export const LayoutFooter = () => {
  // const router = useRouter()
  // const { i18n } = useTranslation('common')

  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <a href="https://flowbite.com" className="hover:underline">
          Flowbite™
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          {/* {i18n.language === 'ar' ? (
            <a onClick={() => i18n.changeLanguage('en')} className="hover:underline">
              English
            </a>
          ) : (
            <a onClick={() => i18n.changeLanguage('ar')} className="hover:underline">
              عربي
            </a>
          )} */}
          {/* {i18n.language === 'ar' ? (
            <Link
              href={
                router.query.id
                  ? { pathname: router.pathname, query: { id: router.query.id } }
                  : { pathname: router.pathname }
              }
              locale="en">
              <a href="#" className="hover:underline">
                English
              </a>
            </Link>
          ) : (
            <Link
              href={
                router.query.id
                  ? { pathname: router.pathname, query: { id: router.query.id } }
                  : { pathname: router.pathname }
              }
              locale="ar">
              <a href="#" className="hover:underline">
                عربي
              </a>
            </Link>
          )} */}
        </li>
      </ul>
    </footer>
  )
}
