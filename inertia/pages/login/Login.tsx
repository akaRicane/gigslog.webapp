import NavigationsController from '#controllers/navigations_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import React, { Activity } from 'react'
import LoginCard from '~/components/auth/LoginCard/LoginCard'
import RegisterCard from '~/components/auth/RegisterCard/RegisterCard'
import PageLayout from '~/components/layouts/PageLayout/PageLayout'
import './Login.css'

enum AvailableActionsCards {
  LOGIN = 'login',
  REGISTER = 'register',
}

const Login: React.FC<InferPageProps<NavigationsController, 'login'>> = () => {
  const [selectedAction, setAction] = React.useState<AvailableActionsCards>(
    AvailableActionsCards.LOGIN
  )

  return (
    <PageLayout title="login">
      <div className="page-container">
        <div className="actions-container">
          <div className="actions-header">
            <button
              className={
                selectedAction === AvailableActionsCards.LOGIN
                  ? 'actions-header-select-action-active'
                  : 'actions-header-select-action'
              }
              onClick={() => setAction(AvailableActionsCards.LOGIN)}
            >
              login
            </button>
            <button
              className={
                selectedAction === AvailableActionsCards.REGISTER
                  ? 'actions-header-select-action-active'
                  : 'actions-header-select-action'
              }
              onClick={() => setAction(AvailableActionsCards.REGISTER)}
            >
              register
            </button>
          </div>
          <div className="actions-dynamic-content">
            <Activity mode={selectedAction === AvailableActionsCards.LOGIN ? 'visible' : 'hidden'}>
              <LoginCard />
            </Activity>
            <Activity
              mode={selectedAction === AvailableActionsCards.REGISTER ? 'visible' : 'hidden'}
            >
              <RegisterCard />
            </Activity>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default Login
