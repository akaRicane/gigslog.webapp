import { NavigationRoutes, UsersAuthApiRoutes } from '#common/enums/api_routes'
import { ApiResponseMessage, UserCredentials } from '#common/types/backend_api'
import { getCsrfToken } from '~/api/api'

export const queryAuthRegister = async (credentials: UserCredentials): Promise<void> => {
  if (credentials.password !== credentials.confirmPassword) {
    return Promise.reject(alert('confirmation password does not match'))
  }

  return fetch(UsersAuthApiRoutes.REGISTER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-XSRF-TOKEN': getCsrfToken(),
    },
    body: JSON.stringify(credentials),
  })
    .then(async (res) => {
      if (res.status === 201) {
        return Promise.resolve(window.location.replace(NavigationRoutes.ACCOUNT))
      } else {
        const data: ApiResponseMessage = await res.json()
        return Promise.resolve(
          alert('queryAuthRegister failed: ' + data.message + ' with status:' + data.status)
        )
      }
    })
    .catch((err) => Promise.reject(alert('queryAuthRegister failed' + JSON.stringify(err))))
}

export const queryAuthLogin = async (credentials: UserCredentials): Promise<void> => {
  return fetch(UsersAuthApiRoutes.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-XSRF-TOKEN': getCsrfToken(),
    },
    body: JSON.stringify(credentials),
  })
    .then(async (res) => {
      if (res.status === 200) {
        return Promise.resolve(window.location.replace(NavigationRoutes.ACCOUNT))
      } else {
        const data: ApiResponseMessage = await res.json()
        return Promise.resolve(
          alert('queryAuthLogin failed: ' + data.message + ' with status:' + data.status)
        )
      }
    })
    .catch((err) => Promise.reject(alert('queryAuthLogin failed' + JSON.stringify(err))))
}

export const queryAuthLogout = async (): Promise<void> => {
  return fetch(UsersAuthApiRoutes.LOGOUT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-XSRF-TOKEN': getCsrfToken(),
    },
  })
    .then(async (res) => {
      if (res.status === 200) {
        return Promise.resolve(window.location.reload())
      } else {
        const data: ApiResponseMessage = await res.json()
        return Promise.resolve(
          alert('queryAuthLogout failed: ' + data.message + ' with status:' + data.status)
        )
      }
    })
    .catch((err) => Promise.reject(alert('queryAuthLogout failed' + JSON.stringify(err))))
}
