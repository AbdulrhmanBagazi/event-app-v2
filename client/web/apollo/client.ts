import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client'

const public_client = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL,
  credentials: 'include',
})
const client = new HttpLink({
  uri: process.env.NEXT_PUBLIC_PROTECTED_GRAPHQL,
  credentials: 'include',
})

const Client = new ApolloClient({
  link: ApolloLink.split(
    (operation) => operation.getContext().clientName === 'public_client',
    public_client,
    client
  ),
  cache: new InMemoryCache(),
})

export default Client
