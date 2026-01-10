import NavigationsController from '#controllers/navigations_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import clsx from 'clsx'
import React, { Activity } from 'react'
import PageLayout from '~/components/layouts/PageLayout/PageLayout'
import ProfileCard from '~/components/profile/ProfileCard/ProfileCard'
import UpdateProfileInfosForm from '~/components/profile/UpdateProfileInfosForm/UpdateProfileInfosForm'
import UpdateUserInfosForm from '~/components/user/UpdateUserInfosForm/UpdateUserInfosForm'
import UserInfosCard from '~/components/user/UserInfosCard/UserInfosCard'
import { AccountDynamicViews } from '~/pages/account/account_utils'
import './Account.css'

const Account: React.FC<InferPageProps<NavigationsController, 'account'>> = ({ user }) => {
  const [dynamicView, setDynamicView] = React.useState<AccountDynamicViews>(
    AccountDynamicViews.ACCOUNT_OVERVIEW
  )

  return (
    <PageLayout title="My account">
      <div className="account-container">
        <div className="user-profile-container">
          <ProfileCard profile={user.profile} />
          <UserInfosCard user={user} />
        </div>

        <div className="account-content-choices-container">
          <button
            onClick={() => setDynamicView(AccountDynamicViews.ACCOUNT_OVERVIEW)}
            className={
              dynamicView === AccountDynamicViews.ACCOUNT_OVERVIEW
                ? clsx('account-content-choice-active', 'account-content-choice')
                : 'account-content-choice'
            }
          >
            Overview
          </button>
          <button
            onClick={() => setDynamicView(AccountDynamicViews.UPDATE_USER_INFOS)}
            className={
              dynamicView === AccountDynamicViews.UPDATE_USER_INFOS
                ? clsx('account-content-choice-active', 'account-content-choice')
                : 'account-content-choice'
            }
          >
            Account Informations
          </button>
          <button
            onClick={() => setDynamicView(AccountDynamicViews.UPDATE_PROFILE_INFOS)}
            className={
              dynamicView === AccountDynamicViews.UPDATE_PROFILE_INFOS
                ? clsx('account-content-choice-active', 'account-content-choice')
                : 'account-content-choice'
            }
          >
            Profile Informations
          </button>
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

          <Activity
            mode={dynamicView === AccountDynamicViews.UPDATE_PROFILE_INFOS ? 'visible' : 'hidden'}
          >
            <UpdateProfileInfosForm profile={user.profile} />
          </Activity>
        </div>
      </div>
    </PageLayout>
  )
}

export default Account
