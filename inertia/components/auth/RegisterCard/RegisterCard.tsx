import { UserCredentials } from '#common/types/backend_api'
import React from 'react'
import { queryAuthRegister } from '~/api/auth_calls'
import './RegisterCard.css'

type RegisterCardProps = {}

const RegisterCard: React.FC<RegisterCardProps> = () => {
  const [credentials, setCredentials] = React.useState<UserCredentials>({
    email: '',
    password: '',
    confirmPassword: '',
  })

  return (
    <div className="register-card-container">
      <form action={() => queryAuthRegister(credentials)} className="register-card-email-form">
        <div className="register-card-email-form-field-wrap">
          <p>email</p>
          <input
            onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            value={credentials.email}
            type="email"
            className="register-card-email-form-field-input"
          />
        </div>
        <div className="register-card-email-form-field-wrap">
          <p>password</p>
          <input
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            value={credentials.password}
            type="password"
            className="register-card-email-form-field-input"
          />
        </div>
        <div className="register-card-email-form-field-wrap">
          <p>confirm password</p>
          <input
            onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })}
            value={credentials.confirmPassword}
            type="password"
            className="register-card-email-form-field-input"
          />
        </div>
        <button type="submit" className="register-card-submit-button">
          register
        </button>
      </form>
    </div>
  )
}

export default RegisterCard
