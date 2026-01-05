/**
 * Auth POST request to api backend
 */
export enum AuthenticationApiRoutes {
  REGISTER = '/user/register',
  REMOVE = '/user/remove',
  UPDATE = '/user/update',
  LOGIN = '/user/login',
  LOGOUT = '/user/logout',
  ME = '/user/me',
  INDEX = '/users',
}

export enum GetCollectionsRoutes {
  ARTISTS = '/artists',
  VENUES = '/venues',
}
