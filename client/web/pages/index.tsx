// import SendVerificationEmail from '../components/sendVerificationEmail'
import { useAuth } from '../contexts/auth.context'
import utilStyles from '../styles/utils.module.css'
import { useTranslation } from 'react-i18next'
import { Order, Posts_ListDocument, Posts_ListQuery, Posts_ListQueryVariables } from '../graphql/generated'
import { useQuery } from '@apollo/client'
import PostsList from '../components/postsLists/postsList'
import Link from 'next/link'

export default function main() {
  const { isAuthenticated, user } = useAuth()
  const { t } = useTranslation('index')
  const { data, loading } = useQuery<Posts_ListQuery, Posts_ListQueryVariables>(Posts_ListDocument, {
    variables: { page: 1, perPage: 100, sortOrder: Order.Asc },
    context: { clientName: 'public_client' },
  })

  return (
    <div className="flex flex-col justify-center flex-1 p-5">
      {/* <SendVerificationEmail /> */}

      <p className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {isAuthenticated && user ? t('welcome') + user?.email : t('login_msg')}
      </p>

      <PostsList data={data} loading={loading} />

      <Link href="/createpost" aria-disabled={true}>
        <button type="submit" className={`my-5 bg-green-500 text-white`} disabled={loading}>
          {`${t('post_create_button')}`}
        </button>
      </Link>
    </div>
  )
}
