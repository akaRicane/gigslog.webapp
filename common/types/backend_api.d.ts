import type { ProfileModel, UserModel } from '#common/types/models_api'

export type UserCredentials = {
  email: string
  password: string
}

export type UserUpdateInformations = {
  newPassword?: string
}

export type TokenInformations = {
  type: string
  value: string
}

export type ApiResponse<T> = {
  data: T
  status: number
  ok: boolean
}

export type ApiResponseMessage = {
  message: string
}

export type ResponseCreateUser = { user: UserModel }

export type ResponseLoginUser = {
  user: UserModel
  token: TokenInformations
}

export type ResponseLogoutUser = ApiResponseMessage

export type ResponseGetUser = {
  user: UserModel
  profile: ProfileModel
}

export type ResponseUpdateUser = {
  user: UserModel
  profile: ProfileModel
}

export type ResponseDeleteUser = ApiResponseMessage
