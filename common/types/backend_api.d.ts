import type { UserModel } from '#common/types/models_api'

export type UserCredentials = {
  email: string | undefined
  password: string | undefined
  confirmPassword?: string | undefined
}

export type UserUpdateInformations = {
  newPassword: string
  confirmNewPassword: string
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
  status: number
  message: string
}

export type ResponseCreateUser = {
  user: UserModel
  token: TokenInformations
} & ApiResponseMessage

export type ResponseLoginUser = {
  user: UserModel
  token: TokenInformations
} & ApiResponseMessage

export type ResponseGetUser = {
  user: UserModel
} & ApiResponseMessage

export type ResponseUpdateUser = {
  user: UserModel
} & ApiResponseMessage

export type ResponseLogoutUser = ApiResponseMessage
export type ResponseDeleteUser = ApiResponseMessage
