import axios, { AxiosResponse } from 'axios'
import { HttpError } from 'react-admin'
import { QueryResponse } from '../@types/index.types'
import { environment } from '../config/environment.config'
export const refreshTokens = async () => {
  await axios.get(`${environment.apiUrl}/companies/authentication/refresh`, { withCredentials: true })
}

const handleRequest = async (request: () => Promise<AxiosResponse>, url?: string): Promise<AxiosResponse> => {
  try {
    return await request()
  } catch (error: any) {
    if (
      error?.response?.status === 401 &&
      url !== '/companies/authentication/signin' &&
      url !== '/companies/authentication/refresh' &&
      url !== '/companies/authentication'
    ) {
      try {
        await refreshTokens()
        return await request()
      } catch (innerError: any) {
        throw new HttpError('Unauthorized', 401, 'Unauthorized')
      }
    }

    throw new HttpError('Unauthorized', 401, 'Unauthorized')
  }
}

export const fetcher = async (uri: string): Promise<QueryResponse> => {
  try {
    const request = () => axios.get(`${environment.apiUrl}${uri}`, { withCredentials: true })
    const { data } = await handleRequest(request, uri)
    return [null, data]
  } catch (error: any) {
    return [error, null]
  }
}

export const poster = async (uri: string, payload?: unknown): Promise<QueryResponse> => {
  try {
    const request = () =>
      axios.post(`${environment.apiUrl}${uri}`, payload, {
        withCredentials: true,
      })
    const { data } = await handleRequest(request, uri)
    return [null, data]
  } catch (error: any) {
    return [error, null]
  }
}

export const handleRequestGraphql = async (request: () => Promise<any>): Promise<any> => {
  try {
    const { error, data } = await request()

    if (data) {
      return { error: null, data }
    }

    if (error === 401) {
      try {
        await refreshTokens()
        const { error, data } = await request()

        if (error === 401) {
          return { error, data: null }
        }

        return { error: 500, data }
      } catch (innerError: any) {
        return { error, data: null }
      }
    }

    return
  } catch (error: any) {
    return { error, data: null }
  }
}
