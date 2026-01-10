import { ProfileModel, UserModel } from '#common/types/models_api'
import React from 'react'
import { queryProfileUpdate } from '~/api/profile_calls'
import './UpdateUserInfosForm.css'

type UpdateUserInfosFormProps = {
  user: UserModel
}

const UpdateUserInfosForm: React.FC<UpdateUserInfosFormProps> = ({ user }) => {
  const [profileState, setProfileState] = React.useState<ProfileModel>(user.profile)

  return (
    <div>
      <form action={() => queryProfileUpdate(profileState)}>
        <div>
          <p>Profile Informations</p>
          <div>
            <p>username</p>
            <input
              value={profileState.displayName || ''}
              onChange={(e) => {
                setProfileState({ ...profileState, displayName: e.target.value })
              }}
            />
          </div>
          <div>
            <p>location</p>
            <p>
              {user.profile.city}, {user.profile.country}
            </p>
          </div>
          <div>
            <p>bio</p>
            <p>{user.profile.bio}</p>
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default UpdateUserInfosForm
