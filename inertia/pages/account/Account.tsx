import NavigationsController from '#controllers/navigations_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import React from 'react'
import { GrAction, GrCopy, GrLocationPin, GrMail, GrUser, GrValidate } from 'react-icons/gr'
import LogoutButton from '~/components/actions/auth/LogoutButton/LogoutButton'
import PageLayout from '~/components/layouts/PageLayout/PageLayout'
import './Account.css'

const Account: React.FC<InferPageProps<NavigationsController, 'account'>> = ({ user }) => {
  return (
    <PageLayout title="My account">
      <div className="account-container">
        <div className="profile-container">
          <div className="profile-main-infos">
            <div className="profile-main-infos-avatar">
              {user.profile.avatarUrl ? <img src={user.profile.avatarUrl} /> : <GrUser />}
            </div>
            <p className="profile-main-infos-username">{user.profile.displayName}</p>
            <p className="profile-main-infos-bio">{user.profile.bio || 'lorem'}</p>
          </div>
          <div className="profile-secondary-infos">
            <div>
              <GrMail />
              <p>{user.email}</p>
              <p>{user.emailIsVerified ? <GrValidate /> : <GrAction />}</p>
            </div>
            <button>
              <GrCopy />
              <p>{user.profile.userPublicId}</p>
            </button>
            <div>
              <GrLocationPin />
              <p>
                {user.profile.city}, {user.profile.country}
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
