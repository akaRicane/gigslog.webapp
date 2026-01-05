/**
 * Auth POST requests routes to web app server
 */
export enum AuthenticationRoutes {
  REGISTER = '/auth/register',
  DELETE = '/auth/delete',
  LOGIN = '/auth/login',
  LOGOUT = '/auth/logout',
  ME = '/auth/me',
  UPDATE = '/auth/update',
}

/**
 * Web app navigation urls
 */
export enum NavigationRoutes {
  HOME = '/',
  EXPLORE = '/explore',
  LOGIN = '/login',
  ACCOUNT = '/account',
}
