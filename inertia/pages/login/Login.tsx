import { UserCredentials } from '#common/types/backend_api'
import NavigationsController from '#controllers/navigations_controller'
import { InferPageProps } from '@adonisjs/inertia/types'
import React from 'react'
import { queryAuthLogin } from '~/app/auth_calls'
import PageLayout from '~/components/layouts/PageLayout/PageLayout'

const Login: React.FC<InferPageProps<NavigationsController, 'login'>> = () => {
  const [credentials, _setCredentials] = React.useState<UserCredentials>({
    email: 'admin@gigslog.com',
    password: 'admin123',
  })

  return (
    <PageLayout title="login">
      <div>
        <form action={() => queryAuthLogin(credentials)}>
          <p>email</p>
          <input onChange={(e) => console.log(e.target.value)} value={credentials.email} />
          <p>password</p>
          <input onChange={(e) => console.log(e.target.value)} value={credentials.password} />
          <button type="submit">submit</button>
        </form>
      </div>
    </PageLayout>
  )
}

export default Login
