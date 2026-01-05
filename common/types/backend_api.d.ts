import type { UserModel } from '#common/types/models_api'

export type UserCredentials = {
  email: string
  password: string
  fullName?: string
}

export type UserUpdateInformations = {
  newFullName?: string
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

export type ResponseCreateUser = UserModel
export type ResponseLoginUser = {
  user: UserModel
  token: TokenInformations
}
export type ResponseLogoutUser = ApiResponseMessage
export type ResponseGetUser = UserModel
export type ResponseUpdateUser = UserModel
export type ResponseDeleteUser = ApiResponseMessage
