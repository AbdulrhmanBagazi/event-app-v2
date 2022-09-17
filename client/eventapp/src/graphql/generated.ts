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

export type Companies = {
  __typename?: 'Companies';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  logo_url: Scalars['String'];
  name: Scalars['String'];
  suspended: Scalars['Boolean'];
};

export enum EventStatus {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Soon = 'SOON'
}

export type Events = {
  __typename?: 'Events';
  companyId: Scalars['String'];
  companyLogo: Scalars['String'];
  content: Scalars['String'];
  content_en: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  image_url: Scalars['String'];
  location_url: Scalars['String'];
  published: Scalars['Boolean'];
  status: EventStatus;
  title: Scalars['String'];
  title_en: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  Events_list: Array<Events>;
  Events_list_meta?: Maybe<ListMetadata>;
  test?: Maybe<Scalars['String']>;
};


export type QueryEvents_ListArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<Order>;
};

export type Events_ListQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<Order>;
  perPage?: InputMaybe<Scalars['Int']>;
}>;


export type Events_ListQuery = { __typename?: 'Query', Events_list: Array<{ __typename?: 'Events', id: string, published: boolean, createdAt: any, updatedAt: any, companyId: string, title: string, content: string, title_en: string, content_en: string, image_url: string, location_url: string, status: EventStatus, companyLogo: string }>, Events_list_meta?: { __typename?: 'ListMetadata', total: number } | null };


export const Events_ListDocument = gql`
    query Events_list($page: Int, $sortOrder: Order, $perPage: Int) {
  Events_list(page: $page, sortOrder: $sortOrder, perPage: $perPage) {
    id
    published
    createdAt
    updatedAt
    companyId
    title
    content
    title_en
    content_en
    image_url
    location_url
    status
    companyLogo
  }
  Events_list_meta {
    total
  }
}
    `;

/**
 * __useEvents_ListQuery__
 *
 * To run a query within a React component, call `useEvents_ListQuery` and pass it any options that fit your needs.
 * When your component renders, `useEvents_ListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEvents_ListQuery({
 *   variables: {
 *      page: // value for 'page'
 *      sortOrder: // value for 'sortOrder'
 *      perPage: // value for 'perPage'
 *   },
 * });
 */
export function useEvents_ListQuery(baseOptions?: Apollo.QueryHookOptions<Events_ListQuery, Events_ListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Events_ListQuery, Events_ListQueryVariables>(Events_ListDocument, options);
      }
export function useEvents_ListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Events_ListQuery, Events_ListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Events_ListQuery, Events_ListQueryVariables>(Events_ListDocument, options);
        }
export type Events_ListQueryHookResult = ReturnType<typeof useEvents_ListQuery>;
export type Events_ListLazyQueryHookResult = ReturnType<typeof useEvents_ListLazyQuery>;
export type Events_ListQueryResult = Apollo.QueryResult<Events_ListQuery, Events_ListQueryVariables>;