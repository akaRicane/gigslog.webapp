import { UserModel } from '#common/types/models_api'
import { GrAction, GrCopy, GrMail, GrValidate } from 'react-icons/gr'
import LogoutButton from '~/components/auth/LogoutButton/LogoutButton'
import './UserInfosCard.css'
import { AccountDynamicViews } from '~/pages/account/account_utils'

type UserInfosCardProps = {
  user: UserModel
  queryUpdateUserInfosCard: (choice: AccountDynamicViews) => void
}

const UserInfosCard: React.FC<UserInfosCardProps> = ({ user, queryUpdateUserInfosCard }) => {
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
        <button onClick={() => queryUpdateUserInfosCard(AccountDynamicViews.UPDATE_USER_INFOS)}>
          edit
        </button>
        <LogoutButton />
      </div>
    </div>
  )
}

export default UserInfosCard
