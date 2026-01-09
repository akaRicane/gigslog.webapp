import NavigationsController from '#controllers/navigations_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import React, { Activity } from 'react'
import PageLayout from '~/components/layouts/PageLayout/PageLayout'
import ProfileCard from '~/components/profile/ProfileCard/ProfileCard'
import UpdateUserInfosForm from '~/components/user/UpdateUserInfosForm/UpdateUserInfosForm'
import UserInfosCard from '~/components/user/UserInfosCard/UserInfosCard'
import { AccountDynamicViews } from '~/pages/account/account_utils'
import './Account.css'

const Account: React.FC<InferPageProps<NavigationsController, 'account'>> = ({ user }) => {
  const [dynamicView, setDynamicView] = React.useState<AccountDynamicViews>(
    AccountDynamicViews.UPDATE_USER_INFOS
  )

  return (
    <PageLayout title="My account">
      <div className="account-container">
        <div className="user-profile-container">
          <ProfileCard profile={user.profile} />
          <UserInfosCard user={user} queryUpdateUserInfosCard={setDynamicView} />
        </div>

        <div className="account-dynamic-content">
          <Activity
            mode={dynamicView === AccountDynamicViews.ACCOUNT_OVERVIEW ? 'visible' : 'hidden'}
          >
            <p>overview page</p>
          </Activity>

          <Activity
            mode={dynamicView === AccountDynamicViews.UPDATE_USER_INFOS ? 'visible' : 'hidden'}
          >
            <UpdateUserInfosForm user={user} />
          </Activity>
        </div>
      </div>
    </PageLayout>
  )
}

export default Account
