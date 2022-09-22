import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
};

export enum EventStatus {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Soon = 'SOON',
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
  sectionId: Scalars['String'];
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
  Create_UserProfile?: Maybe<Profile>;
  Update_UserProfile?: Maybe<Profile>;
};

export type MutationCreate_UserProfileArgs = {
  dateOfBirth?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  nationalID?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
};

export type MutationUpdate_UserProfileArgs = {
  dateOfBirth?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  nationalID?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
};

export enum Order {
  Asc = 'asc',
  Desc = 'desc',
}

export type Profile = {
  __typename?: 'Profile';
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  nationalID?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  Events_list: Array<Events>;
  Events_list_meta?: Maybe<ListMetadata>;
  Sections_list: Array<Sections>;
  test?: Maybe<Scalars['String']>;
};

export type QueryEvents_ListArgs = {
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sectionId?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Order>;
};

export type QueryEvents_List_MetaArgs = {
  sectionId?: InputMaybe<Scalars['String']>;
};

export type Sections = {
  __typename?: 'Sections';
  eventCount: Scalars['Int'];
  id: Scalars['String'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  title_en: Scalars['String'];
};

export type Events_ListQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<Order>;
  perPage?: InputMaybe<Scalars['Int']>;
  sectionId?: InputMaybe<Scalars['String']>;
}>;

export type Events_ListQuery = {
  __typename?: 'Query';
  Events_list: Array<{
    __typename?: 'Events';
    id: string;
    published: boolean;
    createdAt: any;
    updatedAt: any;
    companyId: string;
    title: string;
    content: string;
    title_en: string;
    content_en: string;
    image_url: string;
    location_url: string;
    status: EventStatus;
    companyLogo: string;
    sectionId: string;
  }>;
  Events_list_meta?: {__typename?: 'ListMetadata'; total: number} | null;
};

export type Sections_ListQueryVariables = Exact<{[key: string]: never}>;

export type Sections_ListQuery = {
  __typename?: 'Query';
  Sections_list: Array<{
    __typename?: 'Sections';
    id: string;
    published: boolean;
    title: string;
    title_en: string;
    eventCount: number;
  }>;
};

export type Create_UserProfileMutationVariables = Exact<{
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  nationalID?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
}>;

export type Create_UserProfileMutation = {
  __typename?: 'Mutation';
  Create_UserProfile?: {
    __typename?: 'Profile';
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    userId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    nationality?: string | null;
    nationalID?: string | null;
    dateOfBirth?: string | null;
    gender?: string | null;
  } | null;
};

export type Update_UserProfileMutationVariables = Exact<{
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  nationality?: InputMaybe<Scalars['String']>;
  nationalID?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
}>;

export type Update_UserProfileMutation = {
  __typename?: 'Mutation';
  Update_UserProfile?: {
    __typename?: 'Profile';
    id?: string | null;
    createdAt?: any | null;
    updatedAt?: any | null;
    userId?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    nationality?: string | null;
    nationalID?: string | null;
    dateOfBirth?: string | null;
    gender?: string | null;
  } | null;
};

export const Events_ListDocument = gql`
  query Events_list(
    $page: Int
    $sortOrder: Order
    $perPage: Int
    $sectionId: String
  ) {
    Events_list(
      page: $page
      sortOrder: $sortOrder
      perPage: $perPage
      sectionId: $sectionId
    ) {
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
      sectionId
    }
    Events_list_meta(sectionId: $sectionId) {
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
 *      sectionId: // value for 'sectionId'
 *   },
 * });
 */
export function useEvents_ListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Events_ListQuery,
    Events_ListQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<Events_ListQuery, Events_ListQueryVariables>(
    Events_ListDocument,
    options,
  );
}
export function useEvents_ListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Events_ListQuery,
    Events_ListQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<Events_ListQuery, Events_ListQueryVariables>(
    Events_ListDocument,
    options,
  );
}
export type Events_ListQueryHookResult = ReturnType<typeof useEvents_ListQuery>;
export type Events_ListLazyQueryHookResult = ReturnType<
  typeof useEvents_ListLazyQuery
>;
export type Events_ListQueryResult = Apollo.QueryResult<
  Events_ListQuery,
  Events_ListQueryVariables
>;
export const Sections_ListDocument = gql`
  query Sections_list {
    Sections_list {
      id
      published
      title
      title_en
      eventCount
    }
  }
`;

/**
 * __useSections_ListQuery__
 *
 * To run a query within a React component, call `useSections_ListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSections_ListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSections_ListQuery({
 *   variables: {
 *   },
 * });
 */
export function useSections_ListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Sections_ListQuery,
    Sections_ListQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<Sections_ListQuery, Sections_ListQueryVariables>(
    Sections_ListDocument,
    options,
  );
}
export function useSections_ListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Sections_ListQuery,
    Sections_ListQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<Sections_ListQuery, Sections_ListQueryVariables>(
    Sections_ListDocument,
    options,
  );
}
export type Sections_ListQueryHookResult = ReturnType<
  typeof useSections_ListQuery
>;
export type Sections_ListLazyQueryHookResult = ReturnType<
  typeof useSections_ListLazyQuery
>;
export type Sections_ListQueryResult = Apollo.QueryResult<
  Sections_ListQuery,
  Sections_ListQueryVariables
>;
export const Create_UserProfileDocument = gql`
  mutation Create_UserProfile(
    $firstName: String
    $lastName: String
    $nationality: String
    $nationalID: String
    $dateOfBirth: String
    $gender: String
  ) {
    Create_UserProfile(
      firstName: $firstName
      lastName: $lastName
      nationality: $nationality
      nationalID: $nationalID
      dateOfBirth: $dateOfBirth
      gender: $gender
    ) {
      id
      createdAt
      updatedAt
      userId
      firstName
      lastName
      nationality
      nationalID
      dateOfBirth
      gender
    }
  }
`;
export type Create_UserProfileMutationFn = Apollo.MutationFunction<
  Create_UserProfileMutation,
  Create_UserProfileMutationVariables
>;

/**
 * __useCreate_UserProfileMutation__
 *
 * To run a mutation, you first call `useCreate_UserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_UserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserProfileMutation, { data, loading, error }] = useCreate_UserProfileMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      nationality: // value for 'nationality'
 *      nationalID: // value for 'nationalID'
 *      dateOfBirth: // value for 'dateOfBirth'
 *      gender: // value for 'gender'
 *   },
 * });
 */
export function useCreate_UserProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Create_UserProfileMutation,
    Create_UserProfileMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    Create_UserProfileMutation,
    Create_UserProfileMutationVariables
  >(Create_UserProfileDocument, options);
}
export type Create_UserProfileMutationHookResult = ReturnType<
  typeof useCreate_UserProfileMutation
>;
export type Create_UserProfileMutationResult =
  Apollo.MutationResult<Create_UserProfileMutation>;
export type Create_UserProfileMutationOptions = Apollo.BaseMutationOptions<
  Create_UserProfileMutation,
  Create_UserProfileMutationVariables
>;
export const Update_UserProfileDocument = gql`
  mutation Update_UserProfile(
    $firstName: String
    $lastName: String
    $nationality: String
    $nationalID: String
    $dateOfBirth: String
    $gender: String
  ) {
    Update_UserProfile(
      firstName: $firstName
      lastName: $lastName
      nationality: $nationality
      nationalID: $nationalID
      dateOfBirth: $dateOfBirth
      gender: $gender
    ) {
      id
      createdAt
      updatedAt
      userId
      firstName
      lastName
      nationality
      nationalID
      dateOfBirth
      gender
    }
  }
`;
export type Update_UserProfileMutationFn = Apollo.MutationFunction<
  Update_UserProfileMutation,
  Update_UserProfileMutationVariables
>;

/**
 * __useUpdate_UserProfileMutation__
 *
 * To run a mutation, you first call `useUpdate_UserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_UserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdate_UserProfileMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      nationality: // value for 'nationality'
 *      nationalID: // value for 'nationalID'
 *      dateOfBirth: // value for 'dateOfBirth'
 *      gender: // value for 'gender'
 *   },
 * });
 */
export function useUpdate_UserProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Update_UserProfileMutation,
    Update_UserProfileMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    Update_UserProfileMutation,
    Update_UserProfileMutationVariables
  >(Update_UserProfileDocument, options);
}
export type Update_UserProfileMutationHookResult = ReturnType<
  typeof useUpdate_UserProfileMutation
>;
export type Update_UserProfileMutationResult =
  Apollo.MutationResult<Update_UserProfileMutation>;
export type Update_UserProfileMutationOptions = Apollo.BaseMutationOptions<
  Update_UserProfileMutation,
  Update_UserProfileMutationVariables
>;
