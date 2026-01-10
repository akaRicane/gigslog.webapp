import { ProfileModel } from '#common/types/models_api'
import React from 'react'
import { queryProfileUpdate } from '~/api/profile_calls'
import './UpdateProfileInfosForm.css'

type UpdateProfileFormProps = {
  profile: ProfileModel
}

const UpdateProfileInfosForm: React.FC<UpdateProfileFormProps> = ({ profile }) => {
  const [profileState, setProfileState] = React.useState<ProfileModel>(profile)

  return (
    <div className="update-profile-infos-container">
      <form action={() => queryProfileUpdate(profileState)} className="update-profile-infos-form">
        <div className="profile-infos-field">
          <p className="profile-infos-field-label">username</p>
          <input
            value={profileState.displayName || ''}
            onChange={(e) => {
              setProfileState({ ...profileState, displayName: e.target.value })
            }}
            className="profile-infos-field-input"
          />
        </div>
        <div className="profile-infos-field">
          <p className="profile-infos-field-label">location</p>
          <div className="profile-infos-field-input">
            <input
              value={profileState.city || ''}
              onChange={(e) => {
                setProfileState({ ...profileState, city: e.target.value })
              }}
            />
            <input
              value={profileState.country || ''}
              onChange={(e) => {
                setProfileState({ ...profileState, country: e.target.value })
              }}
            />
          </div>
        </div>
        <div className="profile-infos-field">
          <p className="profile-infos-field-label">bio</p>
          <textarea
            value={profileState.bio || ''}
            onChange={(e) => {
              setProfileState({ ...profileState, bio: e.target.value })
            }}
            className="profile-infos-field-input"
          />
        </div>
        <button type="submit" className="update-profile-infos-form-submit">
          update profile
        </button>
      </form>
    </div>
  )
}

export default UpdateProfileInfosForm
