import type { UserCredentials } from '#common/types/backend_api'
import React from 'react'
import { queryAuthLogin } from '~/app/auth_calls'
import './LoginCard.css'

type LoginCardProps = {}

const LoginCard: React.FC<LoginCardProps> = () => {
  const [credentials, setCredentials] = React.useState<UserCredentials>({
    email: '',
    password: '',
  })

  return (
    <div className="login-card-container">
      <form action={() => queryAuthLogin(credentials)} className="login-card-email-form">
        <div className="login-card-email-form-field-wrap">
          <p>email</p>
          <input
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            value={credentials.email}
            type="email"
            className="login-card-email-form-field-input"
          />
        </div>
        <div className="login-card-email-form-field-wrap">
          <p>password</p>
          <input
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            value={credentials.password}
            type="password"
            className="login-card-email-form-field-input"
          />
        </div>
        <button type="submit" className="login-card-submit-button">
          login
        </button>
      </form>
    </div>
  )
}

export default LoginCard
