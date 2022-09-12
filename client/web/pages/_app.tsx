import '../styles/global.css'
import 'tailwindcss/tailwind.css'
import { ApolloProvider } from '@apollo/client'
import { AuthProvider } from '../contexts/auth.context'
import { NotificationProvider } from '../contexts/notification.context'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n/i18n.config'
import Client from '../apollo/client'
import Layout from '../layout/layout'
import { GoogleOAuthProvider } from '@react-oauth/google'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE as string}>
      <ApolloProvider client={Client}>
        <AuthProvider>
          <I18nextProvider i18n={i18n}>
            <NotificationProvider>
              <Layout>
                <Head>
                  <title>My new cool app</title>
                  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                  <meta name="description" content="hello world this is my cool app" />
                  <meta name="keywords" content="cool, app, hello" />
                </Head>
                <Component {...pageProps} />
              </Layout>
            </NotificationProvider>
          </I18nextProvider>
        </AuthProvider>
      </ApolloProvider>
    </GoogleOAuthProvider>
  )
}

export default App
