import { AxiosError } from 'axios'

export const getError = (error: AxiosError) => {
  if (error?.isAxiosError && error?.response)
    return { error: error?.response?.data, status: error?.response?.status }
  return 'Unexpected error'
}
