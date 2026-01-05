import { GetCollectionsRoutes } from '#common/enums/api_routes'
import { ApiResponse } from '#common/types/backend_api'
import { ArtistModel, VenueModel } from '#common/types/models_api'
import env from '#start/env'

export class ContentApiService {
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
      console.error('Backend API error:', error)
      throw new Error('Failed to communicate with backend API')
    }
  }

  async getAllArtists(): Promise<ApiResponse<ArtistModel[]>> {
    return this.request(GetCollectionsRoutes.ARTISTS, { method: 'GET' })
  }

  async getAllVenues(): Promise<ApiResponse<VenueModel[]>> {
    return this.request(GetCollectionsRoutes.VENUES, { method: 'GET' })
  }
}
