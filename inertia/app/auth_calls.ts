import { AuthenticationRoutes, NavigationRoutes } from '#common/enums/server_routes'
import { UserCredentials } from '#common/types/backend_api'

export const queryAuthRegister = async (credentials: UserCredentials): Promise<void> => {
  if (credentials.password !== credentials.confirmPassword) {
    return Promise.reject()
  }

  return fetch(AuthenticationRoutes.REGISTER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(() => window.location.replace(NavigationRoutes.ACCOUNT))
    .catch((err) => alert('queryAuthRegister failed' + JSON.stringify(err)))
}

export const queryAuthLogin = async (credentials: UserCredentials): Promise<void> => {
  return fetch(AuthenticationRoutes.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(() => window.location.replace(NavigationRoutes.ACCOUNT))
    .catch((err) => alert('queryAuthLogin failed' + JSON.stringify(err)))
}

export const queryAuthLogout = async (): Promise<void> => {
  return fetch(AuthenticationRoutes.LOGOUT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => window.location.reload())
    .catch((err) => console.error('queryAuthLogout failed', err))
}
