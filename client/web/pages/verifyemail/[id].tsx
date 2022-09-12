import { useAuth } from '../../contexts/auth.context'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { fetcherEmailVerify } from '../../lib/fetch.lib'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function VerifyEmail() {
  const { loading, Verified } = useAuth()
  const [isLoading, setLoading] = useState(true)
  const [isVerfied, setVerfied] = useState(false)
  const router = useRouter()
  const code = router.query.id
  const { t } = useTranslation('verifyemail')

  const checkCode = async () => {
    const [error] = await fetcherEmailVerify('/authentication/verifyemail', code)

    if (error) {
      setLoading(false)
      setVerfied(false)
      return
    }

    Verified()
    setLoading(false)
    setVerfied(true)

    return
  }

  useEffect(() => {
    if (code) {
      checkCode()
    }
  }, [code])

  return (
    <div className="flex flex-col justify-center flex-1 p-10">
      <p className={`my-5 ${isLoading ? 'text-yellow-500' : isVerfied ? 'text-green-500' : 'text-red-500'}`}>
        {loading || isLoading
          ? 'checking....'
          : isVerfied
          ? t('your email has been verfied')
          : t('invalid Link')}
      </p>

      {isLoading || loading ? null : (
        <Link href="/">
          <button className="flex items-end self-start bg-green-500 border-2 rounded shadow focus:outline-none border-stone-500 hover:border-stone-900">
            <p className="self-center px-3 font-sans text-[14px]">{t('Home')}</p>
          </button>
        </Link>
      )}
    </div>
  )
}
