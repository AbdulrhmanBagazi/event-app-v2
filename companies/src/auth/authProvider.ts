import { AuthProvider } from 'react-admin'
import { fetcher, poster } from '../lib/fetch.lib'

const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const [error, data]: any[string] = await poster('/companies/authentication/signin', {
      email: username,
      password,
    })

    if (error && !data) {
      return Promise.reject({
        message: 'invalid information!',
      })
    }

    localStorage.setItem('auth', data)
    // accept all username/password combinations
    return Promise.resolve()
  },
  logout: async () => {
    localStorage.removeItem('auth')

    return new Promise<void>(async (resolve, _reject) => {
      const [error, data] = await fetcher('/companies/authentication/signout')

      if (error && !data) {
        return resolve()
      }

      // other error code (404, 500, etc): no need to log out
      return resolve()
    })
  },
  getIdentity: async () => {
    try {
      const [error, data] = await fetcher('/companies/authentication')
      if (error && !data) {
        localStorage.removeItem('auth')
        return Promise.reject()
      }

      localStorage.setItem('auth', data)
      return Promise.resolve({ id: data.admin.id, fullName: data.admin.name })
    } catch (error) {
      return Promise.reject()
    }
  },
  checkError: async (err) => {
    if (err === 401 || err === 403) {
      localStorage.removeItem('auth')
      return Promise.reject()
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve()
  },
  checkAuth: async () => {
    // const [error, data] = await fetcher('/companies/authentication')
    // if (error && !data) {
    //   return Promise.reject()
    // }
    // return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject()

    return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject({ message: 'login.required' })
  },
  getPermissions: () => Promise.reject('Unknown method'),
}

export default authProvider
