import { UserCredentials } from '#types/backend_api'

export enum NavigationRoutes {
  HOME = '/',
  EXPLORE = '/explore',
  LOGIN = '/login',
  ACCOUNT = '/account',
}

export enum AuthApiRoutes {
  REGISTER = '/auth/register',
  DELETE = '/auth/delete',
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
  ME = '/auth/me',
  UPDATE = '/auth/update',
}

export const queryAuthLogin = async (credentials: UserCredentials): Promise<void> => {
  fetch(AuthApiRoutes.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(() => window.location.replace(NavigationRoutes.ACCOUNT))
    .catch((err) => console.error('onLoginFormSubmit failed', err))
}

export const queryAuthLogout = async (): Promise<void> => {
  fetch(AuthApiRoutes.LOGOUT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => window.location.reload())
    .catch((err) => console.error('queryLogout failed', err))
}
