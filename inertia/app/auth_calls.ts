import { AuthenticationRoutes, NavigationRoutes } from '#common/enums/server_routes'
import { UserCredentials } from '#common/types/backend_api'

export const queryAuthLogin = async (credentials: UserCredentials): Promise<void> => {
  fetch(AuthenticationRoutes.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then(() => window.location.replace(NavigationRoutes.ACCOUNT))
    .catch((err) => console.error('queryAuthLogin failed', err))
}

export const queryAuthLogout = async (): Promise<void> => {
  fetch(AuthenticationRoutes.LOGOUT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => window.location.reload())
    .catch((err) => console.error('queryAuthLogout failed', err))
}
