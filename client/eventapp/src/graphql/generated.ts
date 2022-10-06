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
  DateTime: any;
  JSON: any;
};

export enum EventStatus {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Soon = 'SOON',
}

export enum Event_JobsStatus {
  Closed = 'CLOSED',
  Open = 'OPEN',
}

export type Events = {
  __typename?: 'Events';
  Event_Jobs: Array<Eventjob>;
  Location: Location;
  app_sectionId: Scalars['String'];
  companyId: Scalars['String'];
  companyLogo?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  content_en: Scalars['String'];
  createdAt: Scalars['DateTime'];
  details: Array<Scalars['JSON']>;
  details_en: Array<Scalars['JSON']>;
  id: Scalars['String'];
  image_url: Scalars['String'];
  locationId: Scalars['String'];
  location_url: Scalars['String'];
  published: Scalars['Boolean'];
  status: EventStatus;
  title: Scalars['String'];
  title_en: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Filters = {
  published: Scalars['Boolean'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count: Scalars['Int'];
  total: Scalars['Int'];
};

export type Location = {
  __typename?: 'Location';
  title: Scalars['String'];
  title_en: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  Change_Password?: Maybe<Profile>;
  Contact_UserProfile?: Maybe<Profile>;
  Create_UserProfile?: Maybe<Profile>;
  Update_UserProfile?: Maybe<Profile>;
};

export type MutationChange_PasswordArgs = {
  password?: InputMaybe<Scalars['String']>;
};

export type MutationContact_UserProfileArgs = {
  phone?: InputMaybe<Scalars['String']>;
  whatsapp?: InputMaybe<Scalars['String']>;
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
  phone?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  whatsapp?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  Events_list: Array<Events>;
  Events_list_meta?: Maybe<ListMetadata>;
  app_section_list: Array<App_Section>;
  test?: Maybe<Scalars['String']>;
};

export type QueryEvents_ListArgs = {
  app_sectionId: Scalars['String'];
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<Order>;
};

export type QueryEvents_List_MetaArgs = {
  app_sectionId?: InputMaybe<Scalars['String']>;
};

export enum Rate_Type {
  Day = 'DAY',
  Monthly = 'MONTHLY',
}

export type App_Section = {
  __typename?: 'app_section';
  count: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  published: Scalars['Boolean'];
  title: Scalars['String'];
  title_en: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Eventjob = {
  __typename?: 'eventjob';
  eventId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  rate?: Maybe<Scalars['Int']>;
  rate_type?: Maybe<Rate_Type>;
  status?: Maybe<Event_JobsStatus>;
  title?: Maybe<Scalars['String']>;
  title_en?: Maybe<Scalars['String']>;
};

export type Events_ListQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
  sortOrder?: InputMaybe<Order>;
  perPage?: InputMaybe<Scalars['Int']>;
  app_sectionId: Scalars['String'];
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
    companyLogo?: string | null;
    locationId: string;
    app_sectionId: string;
    details: Array<any>;
    details_en: Array<any>;
    Location: {__typename?: 'Location'; title: string; title_en: string};
    Event_Jobs: Array<{
      __typename?: 'eventjob';
      id?: string | null;
      title?: string | null;
      title_en?: string | null;
      status?: Event_JobsStatus | null;
      rate?: number | null;
      rate_type?: Rate_Type | null;
      eventId?: string | null;
    }>;
  }>;
  Events_list_meta?: {__typename?: 'ListMetadata'; total: number} | null;
};

export type App_Section_ListQueryVariables = Exact<{[key: string]: never}>;

export type App_Section_ListQuery = {
  __typename?: 'Query';
  app_section_list: Array<{
    __typename?: 'app_section';
    id: string;
    title: string;
    title_en: string;
    createdAt: any;
    updatedAt: any;
    published: boolean;
    count: number;
  }>;
};

export type Change_PasswordMutationVariables = Exact<{
  password?: InputMaybe<Scalars['String']>;
}>;

export type Change_PasswordMutation = {
  __typename?: 'Mutation';
  Change_Password?: {
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
    whatsapp?: string | null;
    phone?: string | null;
  } | null;
};

export type Contact_UserProfileMutationVariables = Exact<{
  phone?: InputMaybe<Scalars['String']>;
  whatsapp?: InputMaybe<Scalars['String']>;
}>;

export type Contact_UserProfileMutation = {
  __typename?: 'Mutation';
  Contact_UserProfile?: {
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
    whatsapp?: string | null;
    phone?: string | null;
  } | null;
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
    whatsapp?: string | null;
    phone?: string | null;
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
    whatsapp?: string | null;
    phone?: string | null;
  } | null;
};

export const Events_ListDocument = gql`
  query Events_list(
    $page: Int
    $sortOrder: Order
    $perPage: Int
    $app_sectionId: String!
  ) {
    Events_list(
      page: $page
      sortOrder: $sortOrder
      perPage: $perPage
      app_sectionId: $app_sectionId
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
      locationId
      app_sectionId
      details
      details_en
      Location {
        title
        title_en
      }
      Event_Jobs {
        id
        title
        title_en
        status
        rate
        rate_type
        eventId
      }
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
 *      app_sectionId: // value for 'app_sectionId'
 *   },
 * });
 */
export function useEvents_ListQuery(
  baseOptions: Apollo.QueryHookOptions<
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
export const App_Section_ListDocument = gql`
  query app_section_list {
    app_section_list {
      id
      title
      title_en
      createdAt
      updatedAt
      published
      count
    }
  }
`;

/**
 * __useApp_Section_ListQuery__
 *
 * To run a query within a React component, call `useApp_Section_ListQuery` and pass it any options that fit your needs.
 * When your component renders, `useApp_Section_ListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApp_Section_ListQuery({
 *   variables: {
 *   },
 * });
 */
export function useApp_Section_ListQuery(
  baseOptions?: Apollo.QueryHookOptions<
    App_Section_ListQuery,
    App_Section_ListQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useQuery<App_Section_ListQuery, App_Section_ListQueryVariables>(
    App_Section_ListDocument,
    options,
  );
}
export function useApp_Section_ListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    App_Section_ListQuery,
    App_Section_ListQueryVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useLazyQuery<
    App_Section_ListQuery,
    App_Section_ListQueryVariables
  >(App_Section_ListDocument, options);
}
export type App_Section_ListQueryHookResult = ReturnType<
  typeof useApp_Section_ListQuery
>;
export type App_Section_ListLazyQueryHookResult = ReturnType<
  typeof useApp_Section_ListLazyQuery
>;
export type App_Section_ListQueryResult = Apollo.QueryResult<
  App_Section_ListQuery,
  App_Section_ListQueryVariables
>;
export const Change_PasswordDocument = gql`
  mutation Change_Password($password: String) {
    Change_Password(password: $password) {
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
      whatsapp
      phone
    }
  }
`;
export type Change_PasswordMutationFn = Apollo.MutationFunction<
  Change_PasswordMutation,
  Change_PasswordMutationVariables
>;

/**
 * __useChange_PasswordMutation__
 *
 * To run a mutation, you first call `useChange_PasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChange_PasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChange_PasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export function useChange_PasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Change_PasswordMutation,
    Change_PasswordMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    Change_PasswordMutation,
    Change_PasswordMutationVariables
  >(Change_PasswordDocument, options);
}
export type Change_PasswordMutationHookResult = ReturnType<
  typeof useChange_PasswordMutation
>;
export type Change_PasswordMutationResult =
  Apollo.MutationResult<Change_PasswordMutation>;
export type Change_PasswordMutationOptions = Apollo.BaseMutationOptions<
  Change_PasswordMutation,
  Change_PasswordMutationVariables
>;
export const Contact_UserProfileDocument = gql`
  mutation Contact_UserProfile($phone: String, $whatsapp: String) {
    Contact_UserProfile(phone: $phone, whatsapp: $whatsapp) {
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
      whatsapp
      phone
    }
  }
`;
export type Contact_UserProfileMutationFn = Apollo.MutationFunction<
  Contact_UserProfileMutation,
  Contact_UserProfileMutationVariables
>;

/**
 * __useContact_UserProfileMutation__
 *
 * To run a mutation, you first call `useContact_UserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useContact_UserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [contactUserProfileMutation, { data, loading, error }] = useContact_UserProfileMutation({
 *   variables: {
 *      phone: // value for 'phone'
 *      whatsapp: // value for 'whatsapp'
 *   },
 * });
 */
export function useContact_UserProfileMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Contact_UserProfileMutation,
    Contact_UserProfileMutationVariables
  >,
) {
  const options = {...defaultOptions, ...baseOptions};
  return Apollo.useMutation<
    Contact_UserProfileMutation,
    Contact_UserProfileMutationVariables
  >(Contact_UserProfileDocument, options);
}
export type Contact_UserProfileMutationHookResult = ReturnType<
  typeof useContact_UserProfileMutation
>;
export type Contact_UserProfileMutationResult =
  Apollo.MutationResult<Contact_UserProfileMutation>;
export type Contact_UserProfileMutationOptions = Apollo.BaseMutationOptions<
  Contact_UserProfileMutation,
  Contact_UserProfileMutationVariables
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
      whatsapp
      phone
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
      whatsapp
      phone
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
