// Render Prop
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useTranslation } from 'react-i18next'
import {
  Create_PostDocument,
  Create_PostMutation,
  Create_PostMutationVariables,
} from '../../graphql/generated'
import { useMutation } from '@apollo/client'
import { useNotification } from '../../contexts/notification.context'

const CreatePost: React.FC<{}> = () => {
  const { Success, Error } = useNotification()
  const { t } = useTranslation('index')
  const [mutateFunction, { data, loading, error }] = useMutation<
    Create_PostMutation,
    Create_PostMutationVariables
  >(Create_PostDocument)

  const HandleForm = async (values: { title: string; content: string }) => {
    mutateFunction({ variables: { title: values.title, content: values.content, published: true } })
    return
  }

  if (error) Error(`${t('post_error')}`, 2000)
  if (data) Success(`${t('post_created')}`, 2000)

  return (
    <div className="flex flex-1">
      <Formik
        initialValues={{ title: 'first', content: 'hello world' }}
        validate={(values) => {
          const errors: { title?: string; content?: string } = {}
          if (!values.title) {
            errors.title = `${t('required')}`
          }

          if (!values.content) {
            errors.content = `${t('required')}`
          }
          return errors
        }}
        onSubmit={(values) => {
          HandleForm(values)
        }}>
        {({ values, handleChange, handleBlur, handleSubmit, errors }) => (
          <Form className="flex flex-col flex-1 p-20" onSubmit={handleSubmit}>
            <Field
              type="text"
              name="title"
              className="my-5 border-2"
              placeholder={`${t('post_title')}`}
              autoComplete="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              required
            />
            <ErrorMessage name="title" component="div" />

            <Field
              type="text"
              name="content"
              className="my-5 border-2"
              placeholder={`${t('post_content')}`}
              autoComplete="current-content"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
              required
            />
            <ErrorMessage name="content" component="div" />

            <button
              type="submit"
              className={`my-5 ${
                errors?.title || errors?.content || loading ? 'bg-gray-500' : 'bg-green-500'
              } text-white`}
              disabled={loading}>
              {`${t('post_create')}`}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default CreatePost
