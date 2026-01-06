import NavigationsController from '#controllers/navigations_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import React from 'react'
import { GrAction, GrCopy, GrLocationPin, GrMail, GrUser, GrValidate } from 'react-icons/gr'
import LogoutButton from '~/components/actions/auth/LogoutButton/LogoutButton'
import PageLayout from '~/components/layouts/PageLayout/PageLayout'
import './Account.css'

const Account: React.FC<InferPageProps<NavigationsController, 'account'>> = ({ user, profile }) => {
  return (
    <PageLayout title="My account">
      <div className="account-container">
        <div className="profile-container">
          <div className="profile-main-infos">
            <div className="profile-main-infos-avatar">
              {profile.avatarUrl ? <img src={profile.avatarUrl}/> : <GrUser />}
            </div>
            <p className="profile-main-infos-username">{profile.displayName}</p>
            <p className="profile-main-infos-bio">{profile.bio || 'lorem'}</p>
          </div>
          <div className="profile-secondary-infos">
            <div>
              <GrMail />
              <p>{user.email}</p>
              <p>{user.emailIsVerified ? <GrValidate /> : <GrAction />}</p>
            </div>
            <button>
              <GrCopy />
              <p>{profile.userPublicId}</p>
            </button>
            <div>
              <GrLocationPin />
              <p>
                {profile.city}, {profile.country}
              </p>
            </div>
            <LogoutButton />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Account
