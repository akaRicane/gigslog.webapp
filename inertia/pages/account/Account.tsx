import NavigationsController from '#controllers/navigations_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import React from 'react'
import { queryAuthLogout } from '~/app/auth_calls'
import DisplayUserInfos from '~/components/display/DisplayUserInfos/DisplayUserInfos'
import PageLayout from '~/components/layouts/PageLayout/PageLayout'
import './Account.css'

const Account: React.FC<InferPageProps<NavigationsController, 'account'>> = ({ user }) => {
  return (
    <PageLayout title="My account">
      <div>
        <DisplayUserInfos user={user} />
        <button onClick={() => queryAuthLogout()}>LOGOUT</button>
      </div>
    </PageLayout>
  )
}

export default Account
