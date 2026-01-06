import { queryAuthLogout } from '~/app/auth_calls'
import './LogoutButton.css'

const LogoutButton: React.FC = () => {
  return (
    <div className="logout-btn-container">
      <button onClick={() => queryAuthLogout()} className="logout-btn">
        logout
      </button>
    </div>
  )
}

export default LogoutButton
