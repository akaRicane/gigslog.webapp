import { UsersAuthApiRoutes } from '#common/enums/api_routes'
import { ApiResponseMessage } from '#common/types/backend_api'
import { ProfileModel } from '#common/types/models_api'
import { getCsrfToken } from '~/api/api'
import { removeNullFrom } from '../../common/utils/objects'

export const queryProfileUpdate = async (profileData: Partial<ProfileModel>): Promise<void> => {
  return fetch(UsersAuthApiRoutes.UPDATE_PROFILE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-XSRF-TOKEN': getCsrfToken(),
    },
    body: JSON.stringify(removeNullFrom(profileData)),
  })
    .then(async (res) => {
      if (res.status === 200) {
        return Promise.resolve(window.location.reload())
      } else {
        const data: ApiResponseMessage = await res.json()
        return Promise.resolve(
          alert('queryProfileUpdate failed: ' + data.message + ' with status:' + data.status)
        )
      }
    })
    .catch((err) => Promise.reject(alert('queryProfileUpdate failed' + JSON.stringify(err))))
}
