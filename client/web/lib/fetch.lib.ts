import axios, { AxiosResponse } from 'axios'
import { QueryResponse } from '../@types/index.types'
import { environment } from '../config/environment.config'
import { getError } from './error.lib'

export const refreshTokens = async () => {
  await axios.get(`${environment.apiUrl}/authentication/refresh`, { withCredentials: true })
}

const handleRequest = async (request: () => Promise<AxiosResponse>, url?: string): Promise<AxiosResponse> => {
  try {
    return await request()
  } catch (error: any) {
    if (
      error?.response?.status === 401 &&
      url !== '/authentication/signin' &&
      url !== '/authentication/verifyemail'
    ) {
      try {
        await refreshTokens()
        return await request()
      } catch (innerError: any) {
        throw getError(innerError)
      }
    }

    throw getError(error)
  }
}

export const fetcher = async (url: string): Promise<QueryResponse> => {
  try {
    const request = () => axios.get(`${environment.apiUrl}${url}`, { withCredentials: true })
    const { data } = await handleRequest(request, url)
    return [null, data]
  } catch (error: any) {
    return [error, null]
  }
}

export const poster = async (url: string, payload?: unknown): Promise<QueryResponse> => {
  try {
    const request = () =>
      axios.post(`${environment.apiUrl}${url}`, payload, {
        withCredentials: true,
      })
    const { data } = await handleRequest(request, url)
    return [null, data]
  } catch (error: any) {
    return [error, null]
  }
}

export const fetcherEmailVerify = async (url: string, token: any): Promise<QueryResponse> => {
  try {
    const request = () =>
      axios.get(`${environment.apiUrl}${url}`, {
        headers: {
          authorization: token,
        },
      })
    const { data } = await handleRequest(request, url)
    return [null, data]
  } catch (error: any) {
    return [error, null]
  }
}
