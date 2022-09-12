import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from '../contexts/auth.context'
import { LayoutHeader } from './header'
import { ToastContainer } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { LayoutFooter } from './footer'

interface Props {
  children: React.ReactNode
}

function SafeHydrate({ children }: Props) {
  return <div suppressHydrationWarning>{typeof window === 'undefined' ? null : children}</div>
}

const Layout: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, loading, verfied } = useAuth()
  const { t } = useTranslation('common')

  return (
    <SafeHydrate>
      <div className="flex flex-col h-screen overflow-y-scroll bg-gray-200" dir={t('dir')}>
        <LayoutHeader isAuthenticated={isAuthenticated} loading={loading} verfied={verfied} />
        <ToastContainer limit={3} newestOnTop autoClose={2000} />
        <div className="flex-1">{children}</div>
        <LayoutFooter />
      </div>
    </SafeHydrate>
  )
}

export default Layout
