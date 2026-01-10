import { UserModel } from '#common/types/models_api'
import { GrAction, GrCopy, GrMail, GrValidate } from 'react-icons/gr'
import LogoutButton from '~/components/auth/LogoutButton/LogoutButton'
import './UserInfosCard.css'

type UserInfosCardProps = {
  user: UserModel
}

const UserInfosCard: React.FC<UserInfosCardProps> = ({ user }) => {
  return (
    <div className="user-infos-card">
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
        <LogoutButton />
      </div>
    </div>
  )
}

export default UserInfosCard
