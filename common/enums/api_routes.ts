/**
 * Auth POST request to api backend
 */
export enum UsersAuthApiRoutes {
  REGISTER = '/user/register',
  REMOVE = '/user/remove',
  UPDATE = '/user/update',
  UPDATE_PROFILE = '/user/profile/update',
  LOGIN = '/user/login',
  LOGOUT = '/user/logout',
  ME = '/user/me',
  INDEX = '/users',
}

export enum GetCollectionsRoutes {
  ARTISTS = '/artists',
  VENUES = '/venues',
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
