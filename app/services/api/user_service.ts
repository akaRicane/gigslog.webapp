// app/services/backend_api_service.ts
import { UsersAuthApiRoutes } from '#common/enums/api_routes'
import {
  ApiResponse,
  ResponseCreateUser,
  ResponseDeleteUser,
  ResponseGetUser,
  ResponseLoginUser,
  ResponseLogoutUser,
  ResponseUpdateUser,
  UserCredentials,
  UserUpdateInformations,
} from '#common/types/backend_api'
import { ProfileModel } from '#common/types/models_api'
import env from '#start/env'

export default class UserApiService {
  private baseUrl: string

  constructor() {
    this.baseUrl = env.get('BACKEND_API_URL')
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...(options.headers as Record<string, string>),
        },
      })

      const data = await response.json().catch(() => ({}))

      return {
        data: data as T,
        status: response.status,
        ok: response.ok,
      }
    } catch (error) {
      console.error('Backend User/Auth API error:', error)
      throw new Error('Failed to communicate with backend User/Auth API')
    }
  }

  async createUser(userCredentials: UserCredentials): Promise<ApiResponse<ResponseCreateUser>> {
    return this.request(UsersAuthApiRoutes.REGISTER, {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    })
  }

  async loginUser(userCredentials: UserCredentials): Promise<ApiResponse<ResponseLoginUser>> {
    return this.request(UsersAuthApiRoutes.LOGIN, {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    })
  }

  async logoutUser(authToken: string): Promise<ApiResponse<ResponseLogoutUser>> {
    return this.request(UsersAuthApiRoutes.LOGOUT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
  }

  async getUser(authToken: string): Promise<ApiResponse<ResponseGetUser>> {
    return this.request(UsersAuthApiRoutes.ME, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
  }

  async updateUser(
    userUpdateData: UserUpdateInformations,
    authToken: string
  ): Promise<ApiResponse<ResponseUpdateUser>> {
    return this.request(UsersAuthApiRoutes.UPDATE, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(userUpdateData),
    })
  }

  async updateProfile(
    profileUpdateData: Partial<ProfileModel>,
    authToken: string
  ): Promise<ApiResponse<ResponseUpdateUser>> {
    return this.request(UsersAuthApiRoutes.UPDATE_PROFILE, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(profileUpdateData),
    })
  }

  async deleteUser(
    userCredentials: UserCredentials,
    authToken: string
  ): Promise<ApiResponse<ResponseDeleteUser>> {
    return this.request(UsersAuthApiRoutes.REMOVE, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(userCredentials),
    })
  }
}
