import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  total: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  create_Post?: Maybe<Post>;
};


export type MutationCreate_PostArgs = {
  content?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export enum Order {
  Asc = 'asc',
  Desc = 'desc'
}

export type Post = {
  __typename?: 'Post';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Query = {
  __typename?: 'Query';
  Posts_list: Array<Post>;
  Posts_list_meta?: Maybe<ListMetadata>;
  test?: Maybe<Scalars['String']>;
};


export type QueryPosts_ListArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<Order>;
};

export type Create_PostMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  published?: InputMaybe<Scalars['Boolean']>;
}>;


export type Create_PostMutation = { __typename?: 'Mutation', create_Post?: { __typename?: 'Post', id?: string | null, createdAt?: any | null, updatedAt?: any | null, title?: string | null, content?: string | null, published?: boolean | null } | null };

export type Posts_ListQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<Order>;
  perPage?: InputMaybe<Scalars['Int']>;
}>;


export type Posts_ListQuery = { __typename?: 'Query', Posts_list: Array<{ __typename?: 'Post', id?: string | null, createdAt?: any | null, updatedAt?: any | null, title?: string | null, content?: string | null, published?: boolean | null }>, Posts_list_meta?: { __typename?: 'ListMetadata', total: number } | null };


export const Create_PostDocument = gql`
    mutation Create_Post($title: String, $content: String, $published: Boolean) {
  create_Post(title: $title, content: $content, published: $published) {
    id
    createdAt
    updatedAt
    title
    content
    published
  }
}
    `;
export type Create_PostMutationFn = Apollo.MutationFunction<Create_PostMutation, Create_PostMutationVariables>;

/**
 * __useCreate_PostMutation__
 *
 * To run a mutation, you first call `useCreate_PostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_PostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreate_PostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      published: // value for 'published'
 *   },
 * });
 */
export function useCreate_PostMutation(baseOptions?: Apollo.MutationHookOptions<Create_PostMutation, Create_PostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_PostMutation, Create_PostMutationVariables>(Create_PostDocument, options);
      }
export type Create_PostMutationHookResult = ReturnType<typeof useCreate_PostMutation>;
export type Create_PostMutationResult = Apollo.MutationResult<Create_PostMutation>;
export type Create_PostMutationOptions = Apollo.BaseMutationOptions<Create_PostMutation, Create_PostMutationVariables>;
export const Posts_ListDocument = gql`
    query Posts_list($page: Int, $sortOrder: Order, $perPage: Int) {
  Posts_list(page: $page, sortOrder: $sortOrder, perPage: $perPage) {
    id
    createdAt
    updatedAt
    title
    content
    published
  }
  Posts_list_meta {
    total
  }
}
    `;

/**
 * __usePosts_ListQuery__
 *
 * To run a query within a React component, call `usePosts_ListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePosts_ListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePosts_ListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      sortOrder: // value for 'sortOrder'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function usePosts_ListQuery(baseOptions?: Apollo.QueryHookOptions<Posts_ListQuery, Posts_ListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Posts_ListQuery, Posts_ListQueryVariables>(Posts_ListDocument, options);
      }
export function usePosts_ListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Posts_ListQuery, Posts_ListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Posts_ListQuery, Posts_ListQueryVariables>(Posts_ListDocument, options);
        }
export type Posts_ListQueryHookResult = ReturnType<typeof usePosts_ListQuery>;
export type Posts_ListLazyQueryHookResult = ReturnType<typeof usePosts_ListLazyQuery>;
export type Posts_ListQueryResult = Apollo.QueryResult<Posts_ListQuery, Posts_ListQueryVariables>;