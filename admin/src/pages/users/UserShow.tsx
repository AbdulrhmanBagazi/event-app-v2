import {
  Labeled,
  DateField,
  TextField,
  Show,
  TabbedShowLayout,
  Tab,
  useGetOne,
  useRefresh,
  Loading,
  WithRecord,
  FunctionField,
  useLocaleState,
} from 'react-admin'
import ColoredBooleanField from './components/ColoredBooleanField'
import SuspendedBooleanField from './components/SuspendedBooleanField'
import { useParams } from 'react-router-dom'
import MyError from '../../layout/MyError'
import moment from 'moment'
import countries from 'i18n-iso-countries'

const UserShow = () => {
  const [locale] = useLocaleState()
  const { id } = useParams()
  const { data, isLoading } = useGetOne(
    'User',
    { id },
    {
      retry: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  )
  const refresh = useRefresh()

  if (isLoading) return <Loading />

  if (!data) return <MyError onClick={() => refresh()} />
  return (
    <Show
      queryOptions={{
        onError: (err) => {
          return null
        },
      }}
      emptyWhileLoading>
      <TabbedShowLayout>
        <Tab label="resources.User.showtabs.show">
          <Labeled label="resources.User.fields.id">
            <TextField source="id" />
          </Labeled>
          <Labeled label="resources.User.fields.email">
            <TextField source="email" />
          </Labeled>
          <Labeled label="resources.User.fields.createdAt">
            <DateField source="createdAt" />
          </Labeled>
          <Labeled label="resources.User.fields.Type">
            <TextField source="Type" />
          </Labeled>
          <Labeled label="resources.User.fields.verfied">
            <ColoredBooleanField source="verfied" />
          </Labeled>
          <Labeled label="resources.User.fields.suspended">
            <SuspendedBooleanField source="suspended" />
          </Labeled>
        </Tab>

        <Tab label="resources.User.showtabs.profile">
          <WithRecord
            render={(record) =>
              record.Profile ? (
                <>
                  <Labeled label="resources.User.fields.Profile.firstName">
                    <FunctionField render={(record: any) => record.Profile.firstName} />
                  </Labeled>
                  <Labeled label="resources.User.fields.Profile.lastName">
                    <FunctionField render={(record: any) => record.Profile.lastName} />
                  </Labeled>
                  <Labeled label="resources.User.fields.Profile.nationality">
                    <FunctionField
                      render={(record: any) => countries.getName(record.Profile.nationality, locale)}
                    />
                  </Labeled>
                  <Labeled label="resources.User.fields.Profile.nationalID">
                    <FunctionField render={(record: any) => record.Profile.nationalID} />
                  </Labeled>
                  <Labeled label="resources.User.fields.Profile.gender">
                    {locale === 'en' ? (
                      <FunctionField render={(record: any) => record.Profile.gender} />
                    ) : (
                      <FunctionField
                        render={(record: any) => (record.Profile.gender === 'male' ? 'ذكر' : 'انثى')}
                      />
                    )}
                  </Labeled>
                  <Labeled label="resources.User.fields.Profile.dateOfBirth">
                    <DateField source="Profile.dateOfBirth" />
                  </Labeled>
                  <Labeled label="resources.User.fields.Profile.age">
                    <FunctionField
                      render={(record: any) => moment().diff(record.Profile.dateOfBirth, 'years')}
                    />
                  </Labeled>

                  <Labeled label="resources.User.fields.Profile.createdAt">
                    <DateField source="Profile.createdAt" />
                  </Labeled>
                </>
              ) : (
                <Labeled label="resources.User.fields.Profile.null">
                  <FunctionField render={(_record: any) => ''} />
                </Labeled>
              )
            }
          />
        </Tab>
      </TabbedShowLayout>
    </Show>
  )
}

export default UserShow
